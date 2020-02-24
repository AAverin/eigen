import { renderRelayTree } from "lib/tests/renderRelayTree"
import { graphql } from "react-relay"
import { fairFixture } from "../../__fixtures__"
import { FairArtworksContainer as FairArtworks } from "../FairArtworks"

jest.unmock("react-relay")

xit("renders properly", async () => {
  const tree = await renderRelayTree({
    Component: FairArtworks,
    query: graphql`
      query FairArtworksTestsQuery @raw_response_type {
        fair(id: "sofa-chicago-2018") {
          ...FairArtworks_fair
        }
      }
    `,
    mockData: {
      fair: fairFixture,
    }, // Enable/fix this when making large change to these components/fixtures: as FairArtworksTestsQueryRawResponse,
  })

  expect(tree.html()).toMatchSnapshot()
})
