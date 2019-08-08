import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

import { Dimensions, StyleSheet, View } from "react-native"

import NavButton from "../Buttons/NavigationButton"
import RelatedArtists from "../RelatedArtists"
import Separator from "../Separator"
import Articles from "./Articles"
import Biography from "./Biography"

import { About_artist } from "__generated__/About_artist.graphql"

interface Props {
  artist: About_artist
}

class About extends React.Component<Props> {
  render() {
    return (
      <View>
        {this.biography()}
        {this.articles()}
        {this.relatedArtists()}
      </View>
    )
  }

  biography() {
    if (this.props.artist.has_metadata) {
      return (
        <View>
          <Biography artist={this.props.artist as any} />
          {this.auctionResults()}
          <Separator style={styles.sectionSeparator} />
        </View>
      )
    }
  }

  auctionResults() {
    if (this.props.artist.is_display_auction_link) {
      // Keeps the same margins as the bio text
      const sideMargin = Dimensions.get("window").width > 700 ? 50 : 20
      const url = `/artist/${this.props.artist.slug}/auction-results`
      return (
        <NavButton title="Auction results" href={url} style={{ marginLeft: sideMargin, marginRight: sideMargin }} />
      )
    }
  }

  articles() {
    if (this.props.artist.articles.edges.length) {
      return (
        <View>
          <Articles articles={this.props.artist.articles.edges.map(({ node }) => node)} />
          <Separator style={styles.sectionSeparator} />
        </View>
      )
    }
  }

  relatedArtists() {
    return this.props.artist.related.artists.edges.length ? (
      <RelatedArtists artists={this.props.artist.related.artists.edges.map(({ node }) => node)} />
    ) : null
  }
}

const styles = StyleSheet.create({
  sectionSeparator: {
    marginBottom: 20,
  },
})

export default createFragmentContainer(About, {
  artist: graphql`
    fragment About_artist on Artist {
      has_metadata: hasMetadata
      is_display_auction_link: isDisplayAuctionLink
      slug
      ...Biography_artist
      related {
        artists: artistsConnection(first: 16) {
          edges {
            node {
              ...RelatedArtists_artists
            }
          }
        }
      }
      articles: articlesConnection(first: 10) {
        edges {
          node {
            ...Articles_articles
          }
        }
      }
    }
  `,
})
