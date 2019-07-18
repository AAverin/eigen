import { Box, Join, Separator, Spacer } from "@artsy/palette"
import { OtherWorks_artwork } from "__generated__/OtherWorks_artwork.graphql"
import GenericGrid from "lib/Components/ArtworkGrids/GenericGrid"
import { filter } from "lodash"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ContextGridCTA } from "./ContextGridCTA"
import { Header } from "./Header"

export const OtherWorksFragmentContainer = createFragmentContainer<{ artwork: OtherWorks_artwork }>(
  props => {
    const grids = props.artwork.contextGrids
    const populatedGrids =
      grids &&
      grids.length > 0 &&
      filter(grids, grid => {
        const artworkNodes = grid.artworks && grid.artworks.edges && grid.artworks.edges.map(({ node }) => node)
        return artworkNodes && artworkNodes.length > 0
      })

    if (populatedGrids && populatedGrids.length > 0) {
      return (
        <Join
          separator={
            <Box my={3}>
              <Separator />
            </Box>
          }
        >
          {populatedGrids.map((grid, index) => (
            <React.Fragment key={`Grid-${index}`}>
              <Header title={grid.title} />
              <Spacer mb={3} />
              <GenericGrid artworks={grid.artworks.edges.map(({ node }) => node)} />
              <Box mt={2}>
                <ContextGridCTA href={grid.ctaHref} label={grid.ctaTitle} />
              </Box>
            </React.Fragment>
          ))}
        </Join>
      )
    }
  },
  {
    artwork: graphql`
      fragment OtherWorks_artwork on Artwork {
        contextGrids {
          title
          ctaTitle
          ctaHref
          artworks(first: 6) {
            edges {
              node {
                ...GenericGrid_artworks
              }
            }
          }
        }
      }
    `,
  }
)
