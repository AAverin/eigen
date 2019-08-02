import { Theme } from "@artsy/palette"
import { mount } from "enzyme"
import React from "react"
import { Text } from "react-native"
import { ArtworkConsignLink } from "../ArtworkConsignLink"

jest.mock("lib/NativeModules/SwitchBoard", () => ({
  presentNavigationViewController: jest.fn(),
}))

import SwitchBoard from "lib/NativeModules/SwitchBoard"

describe("ArtworkConsignLink", () => {
  it("redirects to consignments flow when consignments link is clicked", () => {
    const component = mount(
      <Theme>
        <ArtworkConsignLink consignableArtistsCount={3} artistName={null} />
      </Theme>
    )
    const consignmentsLink = component.find(Text).at(1)
    expect(consignmentsLink.text()).toContain("Consign with Artsy.")
    consignmentsLink.props().onPress()
    expect(SwitchBoard.presentNavigationViewController).toHaveBeenCalledWith(expect.anything(), "/consign/submission")
  })

  describe("for an artwork with more than 1 consignable artist", () => {
    it("shows plural link text", () => {
      const component = mount(
        <Theme>
          <ArtworkConsignLink consignableArtistsCount={3} artistName={null} />
        </Theme>
      )
      expect(component.text()).toContain("Want to sell a work by these artists?")
    })
    it("shows consign link if at least 1 artist is consignable", () => {
      const component = mount(
        <Theme>
          <ArtworkConsignLink consignableArtistsCount={3} artistName={null} />
        </Theme>
      )
      expect(component.text()).toContain("Consign with Artsy.")
    })
    it("doesn't show consign link if no artists are consignable", () => {
      const component = mount(
        <Theme>
          <ArtworkConsignLink consignableArtistsCount={0} artistName={null} />
        </Theme>
      )
      expect(component.text()).not.toContain("Consign with Artsy.")
    })
  })

  describe("for an artwork with one artist", () => {
    it("shows singular link text", () => {
      const component = mount(
        <Theme>
          <ArtworkConsignLink consignableArtistsCount={1} artistName="Santa Claus" />
        </Theme>
      )
      expect(component.text()).toContain("Want to sell a work by Santa Claus?")
    })

    it("shows consign link", () => {
      const component = mount(
        <Theme>
          <ArtworkConsignLink consignableArtistsCount={1} artistName="Santa Claus" />
        </Theme>
      )
      expect(component.text()).toContain("Consign with Artsy.")
    })
  })
})
