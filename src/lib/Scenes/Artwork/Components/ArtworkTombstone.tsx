import { color, Flex, Link, Sans, Serif } from "@artsy/palette"
import { ArtworkTombstone_artwork } from "__generated__/ArtworkTombstone_artwork.graphql"
import Button from "lib/Components/Buttons/InvertedButton"
import SerifText from "lib/Components/Text/Serif"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import React from "react"
import { Text, TouchableWithoutFeedback } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"

type Artist = ArtworkTombstone_artwork["artists"][0]

export interface ArtworkTombstoneProps {
  artwork: ArtworkTombstone_artwork
}

export class ArtworkTombstone extends React.Component<ArtworkTombstoneProps> {
  handleTap(artist: Artist) {
    console.log("HANDLE TAP!!!!")
    SwitchBoard.presentNavigationViewController(this, artist.href)
  }

  renderSingleArtist(artist: Artist) {
    return <React.Fragment>{this.renderArtistName(artist)}</React.Fragment>
  }

  renderArtistName(artist: Artist) {
    return artist.href ? (
      <Flex>
        <TouchableWithoutFeedback onPress={this.handleTap.bind(this, artist)}>
          <Serif size="5t" weight="semibold">
            {artist.name}
          </Serif>
        </TouchableWithoutFeedback>
        <Sans color={color("black60")} size="3">
          Follow
        </Sans>
      </Flex>
    ) : (
      <Flex>
        <Serif size="5t" weight="semibold">
          {artist.name}
        </Serif>
        <Sans color={color("black60")} size="3">
          Follow
        </Sans>
      </Flex>
    )
  }

  renderMultipleArtists() {
    const {
      artwork: { artists },
    } = this.props
    return artists.map((artist, index) => {
      return (
        <React.Fragment key={artist.__id}>
          {this.renderArtistName(artist)}
          {index !== artists.length - 1 && ", "}
        </React.Fragment>
      )
    })
  }

  renderCulturalMaker(culturalMaker: string) {
    return (
      <Serif size="5t" weight="semibold">
        {culturalMaker}
      </Serif>
    )
  }

  render() {
    const { artwork } = this.props
    console.log("ARTOWRK", artwork)
    return (
      <>
        <Flex>
          {artwork.artists.length === 1 ? this.renderSingleArtist(artwork.artists[0]) : this.renderMultipleArtists()}
          {artwork.artists.length === 0 && artwork.cultural_maker && this.renderCulturalMaker(artwork.cultural_maker)}
        </Flex>
        <Serif color={color("black60")} size="3" m="0" p="0">
          {artwork.title}, {artwork.date}
        </Serif>
        <Serif color={color("black60")} size="3">
          {artwork.medium}
        </Serif>
        <Serif color={color("black60")} size="3">
          {artwork.dimensions.in}
        </Serif>
        <Serif color={color("black60")} size="3">
          {artwork.edition_of}
        </Serif>
        <Serif color={color("black60")} size="3">
          {artwork.attribution_class ? artwork.attribution_class.short_description : ""}
        </Serif>
      </>
    )
  }
}

export const ArtworkTombstoneFragmentContainer = createFragmentContainer(ArtworkTombstone, {
  artwork: graphql`
    fragment ArtworkTombstone_artwork on Artwork {
      title
      medium
      date
      cultural_maker
      artists {
        __id
        name
        href
      }
      dimensions {
        in
        cm
      }
      edition_of
      attribution_class {
        short_description
      }
    }
  `,
})
