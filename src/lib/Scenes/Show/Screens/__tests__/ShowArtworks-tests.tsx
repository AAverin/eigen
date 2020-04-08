import { ShowArtworksTestsQueryRawResponse } from "__generated__/ShowArtworksTestsQuery.graphql"
import { ShowFixture } from "lib/__fixtures__/ShowFixture"
import { renderRelayTree } from "lib/tests/renderRelayTree"
import { graphql } from "react-relay"
import { ShowArtworksContainer as ShowArtworks } from "../../../../Scenes/Show/Screens/ShowArtworks"

jest.unmock("react-relay")

it("renders without throwing an error", async () => {
  await renderRelayTree({
    Component: ShowArtworks,
    query: graphql`
      query ShowArtworksTestsQuery @raw_response_type {
        show(id: "anderson-fine-art-gallery-flickinger-collection") {
          ...ShowArtworks_show
        }
      }
    `,
    mockData: {
      show: ShowFixture,
    } as ShowArtworksTestsQueryRawResponse,
  })
})
