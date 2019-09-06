import { Box, Theme } from "@artsy/palette"
import { LotsByFollowedArtists_query } from "__generated__/LotsByFollowedArtists_query.graphql"
import { InfiniteScrollArtworksGridContainer as InfiniteScrollArtworksGrid } from "lib/Components/ArtworkGrids/InfiniteScrollArtworksGrid"
import React, { Component } from "react"
import { createPaginationContainer, graphql, RelayPaginationProp } from "react-relay"
import { SectionHeader } from "./SectionHeader"

const DEFAULT_TITLE = "Lots by Artists You Follow"

interface Props {
  relay: RelayPaginationProp
  title?: string
  query: LotsByFollowedArtists_query
}

export class LotsByFollowedArtists extends Component<Props> {
  render() {
    if (this.props.query.me.lotsByFollowedArtistsConnection.edges.length === 0) {
      return null
    }

    const { title = DEFAULT_TITLE } = this.props

    return (
      <Theme>
        <Box p={1}>
          <InfiniteScrollArtworksGrid
            loadMore={this.props.relay.loadMore}
            connection={this.props.query.me.lotsByFollowedArtistsConnection}
            HeaderComponent={
              <Box pb={1}>
                <SectionHeader title={title} />
              </Box>
            }
          />
        </Box>
      </Theme>
    )
  }
}

export default createPaginationContainer(
  LotsByFollowedArtists,
  {
    query: graphql`
      fragment LotsByFollowedArtists_query on Query
        @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" }) {
        me {
          lotsByFollowedArtistsConnection(first: $count, after: $cursor, liveSale: true, isAuction: true)
            @connection(key: "LotsByFollowedArtists_lotsByFollowedArtistsConnection") {
            edges {
              cursor
            }
            ...InfiniteScrollArtworksGrid_connection
          }
        }
      }
    `,
  },
  {
    getConnectionFromProps: ({ query }) => query && query.me.lotsByFollowedArtistsConnection,
    getFragmentVariables: (prevVars, totalCount) => ({ ...prevVars, count: totalCount }),
    getVariables: (_props, { count, cursor }) => ({ count, cursor }),
    query: graphql`
      query LotsByFollowedArtistsQuery($count: Int!, $cursor: String) {
        ...LotsByFollowedArtists_query @arguments(count: $count, cursor: $cursor)
      }
    `,
  }
)
