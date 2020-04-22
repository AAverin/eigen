// TODO: This file still has a bunch of faffing with rendering a relay based version of ArtistCard and a plain React
//       version. In reality it should be updated to never render the React component but instead update the store and
//       let Relay re-render the cards.

import React, { Component } from "react"
import { Animated, Easing, View, ViewProperties } from "react-native"
import { commitMutation, createFragmentContainer, graphql, RelayProp } from "react-relay"

import { Schema, useTracking } from "lib/utils/track"
import { ArtistCard, ArtistCardContainer } from "./ArtistCard"

import { Flex } from "@artsy/palette"
import { ArtistCard_artist } from "__generated__/ArtistCard_artist.graphql"
import { ArtistRail_rail } from "__generated__/ArtistRail_rail.graphql"
import { ArtistRailFollowMutation } from "__generated__/ArtistRailFollowMutation.graphql"
import { SectionTitle } from "lib/Components/SectionTitle"
import { postEvent } from "lib/NativeModules/Events"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import { CardRailFlatList } from "../CardRailFlatList"

const Animation = {
  yDelta: 20,
  duration: {
    followedArtist: 500,
    suggestedArtist: 400,
  },
  easing: Easing.out(Easing.cubic),
}

interface SuggestedArtist extends Pick<ArtistCard_artist, Exclude<keyof ArtistCard_artist, " $refType">> {
  _animatedValues?: {
    opacity: Animated.Value
    translateY: Animated.Value
  }
}

interface Props extends ViewProperties {
  relay: RelayProp
  rail: ArtistRail_rail
}

const ArtistRail: React.FC<Props & RailScrollProps> = props => {
  const { trackEvent } = useTracking()


  const [artists, setArtists] = useState<SuggestedArtist[]>([])

  useEffect(() => {
    if (props.rail.results) {
      setArtists(props.rail.results.map(artist => setupSuggestedArtist(artist, 1, 0)))
    }
  }, [])

  const followedArtistAnimation = followedArtist => {
    return new Promise((resolve, _reject) => {
      const { opacity, translateY } = followedArtist._animatedValues
      const duration = Animation.duration.followedArtist
      const easing = Animation.easing
      Animated.parallel([
        Animated.timing(opacity, { duration, easing, toValue: 0, useNativeDriver: true }),
        Animated.timing(translateY, { duration, easing, toValue: Animation.yDelta, useNativeDriver: true }),
      ]).start(resolve)
    })
  }

  const suggestedArtistAnimation = (suggestedArtist: SuggestedArtist) => {
    return new Promise((resolve, _reject) => {
      const { opacity, translateY } = suggestedArtist._animatedValues
      const duration = Animation.duration.suggestedArtist
      const easing = Animation.easing
      Animated.parallel([
        Animated.timing(opacity, { duration, easing, toValue: 1, useNativeDriver: true }),
        Animated.timing(translateY, { duration, easing, toValue: 0, useNativeDriver: true }),
      ]).start(resolve)
    })
  }

  const replaceFollowedArtist = (followedArtist, suggestedArtist: SuggestedArtist): Promise<undefined> => {
    const nextArtists = artists.slice(0)
    const index = nextArtists.indexOf(followedArtist)
    if (suggestedArtist) {
      nextArtists[index] = suggestedArtist
    } else {
      // remove card when there is no suggestion
      nextArtists.splice(index, 1)
    }
    // Resolve after re-render
    return new Promise(resolve => {
      setArtists(nextArtists)
      resolve()
    })
  }

  const followArtistAndFetchNewSuggestion = (followArtist: SuggestedArtist) => {
    return new Promise<SuggestedArtist | null>((resolve, reject) => {
      commitMutation<ArtistRailFollowMutation>(defaultEnvironment, {
        mutation: graphql`
          mutation ArtistRailFollowMutation($input: FollowArtistInput!, $excludeArtistIDs: [String]!) {
            followArtist(input: $input) {
              artist {
                related {
                  suggestedConnection(
                    first: 1
                    excludeArtistIDs: $excludeArtistIDs
                    excludeFollowedArtists: true
                    excludeArtistsWithoutForsaleArtworks: true
                  ) {
                    edges {
                      node {
                        ...ArtistCard_artist @relay(mask: false)
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          input: { artistID: followArtist.internalID },
          excludeArtistIDs: artists.map(({ internalID }) => internalID),
        },
        onError: reject,
        onCompleted: (response, errors) => {
          if (errors && errors.length > 0) {
            reject(new Error(JSON.stringify(errors)))
          } else {
            postEvent({
              name: "Follow artist",
              artist_id: followArtist.internalID,
              artist_slug: followArtist.slug,
              source_screen: "home page",
              context_module: "artist rail",
            })

            const [edge] = response.followArtist.artist.related.suggestedConnection.edges
            resolve(edge ? setupSuggestedArtist(edge.node, 0, -Animation.yDelta) : null)
          }
        },
      })
    })
  }

  const handleFollowChange = async (
    followArtist: SuggestedArtist,
    completionHandler: (followStatus: boolean) => void
  ) => {
    trackEvent({
      action_name: Schema.ActionNames.HomeArtistRailFollow,
      action_type: Schema.ActionTypes.Tap,
      owner_id: followArtist.internalID,
      owner_slug: followArtist.id,
      owner_type: Schema.OwnerEntityTypes.Artist,
    })
    try {
      const suggestion = await followArtistAndFetchNewSuggestion(followArtist)
      completionHandler(true)
      if (suggestion) {
        await followedArtistAnimation(followArtist)
        await replaceFollowedArtist(followArtist, suggestion)
        await suggestedArtistAnimation(suggestion)
      }
    } catch (error) {
      console.warn(error)
      completionHandler(false)
    }
  }

  const renderModuleResults = () => {
    return (
      <CardRailFlatList<SuggestedArtist>
        data={artists}
        keyExtractor={artist => artist.id}
        renderItem={({ item: artist }) => {
          const key = props.rail.id + artist.id
          const { opacity, translateY } = artist._animatedValues
          const style = { opacity, transform: [{ translateY }] }
          return (
            <Animated.View key={key} style={style}>
              {artist.hasOwnProperty("__fragments") ? (
                <ArtistCardContainer
                  artist={artist as any}
                  onFollow={completionHandler => handleFollowChange(artist, completionHandler)}
                />
              ) : (
                <ArtistCard
                  artist={artist as any}
                  onFollow={completionHandler => handleFollowChange(artist, completionHandler)}
                />
              )}
            </Animated.View>
          )
        }}
      />
    )
  }

  const title = (): string => {
    // TODO: Once Title is updated to styled-components, update the copy to spec
    switch (props.rail.key) {
      case "TRENDING":
        return "Trending Artists on Artsy"
      case "SUGGESTED":
        return "Recommended Artists"
      case "POPULAR":
        return "Popular Artists on Artsy"
    }
  }

  const subtitle = (): string | null => {
    switch (props.rail.key) {
      case "TRENDING":
        return null
      case "SUGGESTED":
        return "Based on artists you follow"
      case "POPULAR":
        return null
    }
  }

  return artists.length ? (
    <View>
      <Flex pl="2" pr="2">
        <SectionTitle title={title()} subtitle={subtitle()} />
      </Flex>
      {renderModuleResults()}
    </View>
  ) : null
}

const setupSuggestedArtist = (artist, opacity, translateY) =>
  ({
    ...artist,
    _animatedValues: {
      opacity: new Animated.Value(opacity),
      translateY: new Animated.Value(translateY),
    },
  } as SuggestedArtist)

export const ArtistRailFragmentContainer = createFragmentContainer(ArtistRail, {
  rail: graphql`
    fragment ArtistRail_rail on HomePageArtistModule {
      id
      key
      results {
        id
        internalID
        ...ArtistCard_artist
      }
    }
  `,
})
