import { shallow } from "enzyme"
import React from "react"
import { Artwork } from "../Artwork"
import { ArtworkActions } from "../Components/ArtworkActions"

describe("Artwork", () => {
  it("renders a snapshot", () => {
    const component = shallow(
      <Artwork
        artwork={{
          " $fragmentRefs": null,
          images: [],
          availability: "for sale",
          partner: { name: "Partner 1" },
          additional_information: "lorem",
          description: "ipsum",
          " $refType": null,
          artist: { biography_blurb: { text: "hello" } },
        }}
      />
    )
    expect(component.find(ArtworkActions).length).toEqual(1)
  })
})
