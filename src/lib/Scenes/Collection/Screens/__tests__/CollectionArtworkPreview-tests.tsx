import { CollectionArtworkPreviewTestsQueryRawResponse } from "__generated__/CollectionArtworkPreviewTestsQuery.graphql"
import { renderRelayTree } from "lib/tests/renderRelayTree"
import React from "react"
import { graphql } from "react-relay"
import { CollectionFixture } from "../../Components/__fixtures__/CollectionFixture"
import { CollectionArtworkPreviewContainer as CollectionArtworkPreview } from "../CollectionArtworkPreview"

jest.unmock("react-relay")

// TODO: Re-enable this test after following up with Mobile Exp Team
// Discussion here: https://github.com/artsy/emission/pull/2015/files#r360482627
xit("renders properly", async () => {
  const tree = await renderRelayTree({
    Component: (props: any) => <CollectionArtworkPreview collection={props} {...props} />,
    query: graphql`
      query CollectionArtworkPreviewTestsQuery @raw_response_type {
        marketingCollection(slug: "street-art-now") {
          ...CollectionArtworkPreview_collection
        }
      }
    `,
    mockData: { marketingCollection: CollectionFixture } as CollectionArtworkPreviewTestsQueryRawResponse,
  })

  expect(tree.html()).toMatchSnapshot()
})
