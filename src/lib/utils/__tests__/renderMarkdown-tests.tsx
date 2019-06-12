import { Flex, Sans, Serif } from "@artsy/palette"
import { shallow } from "enzyme"
import { LinkText } from "lib/Components/Text/LinkText"
import React from "react"
import { defaultRules, renderMarkdown } from "../renderMarkdown"

describe("renderMarkdown", () => {
  it("returns markdown for a simple string", () => {
    expect(renderMarkdown("")).toMatchInlineSnapshot(`
                        Array [
                          <Text />,
                        ]
                `)
  })

  it("returns markdown for multiple paragraphs", () => {
    const componentList = renderMarkdown("This is a first paragraph\n\nThis is a second paragraph") as any
    expect(componentList.length).toEqual(4)

    const renderedComponent = shallow(<Flex>{componentList}</Flex>)
    expect(
      renderedComponent
        .find(Sans)
        .at(0)
        .text()
    ).toEqual("This is a first paragraph")

    expect(
      renderedComponent
        .find(Sans)
        .at(1)
        .text()
    ).toEqual("This is a second paragraph")
  })

  it("returns markdown for multiple paragraphs and links", () => {
    const componentList = renderMarkdown(
      "This is a [first](/artist/first) paragraph\n\nThis is a [second](/gene/second) paragraph"
    ) as any
    expect(componentList.length).toEqual(4)

    const renderedComponent = shallow(<Flex>{componentList}</Flex>)
    expect(renderedComponent.find(Sans).length).toEqual(2)
    expect(renderedComponent.find(LinkText).length).toEqual(2)

    expect(
      renderedComponent
        .find(Sans)
        .at(0)
        .text()
    ).toEqual("This is a first paragraph")

    expect(
      renderedComponent
        .find(LinkText)
        .at(0)
        .text()
    ).toEqual("first")

    expect(
      renderedComponent
        .find(Sans)
        .at(1)
        .text()
    ).toEqual("This is a second paragraph")

    expect(
      renderedComponent
        .find(LinkText)
        .at(1)
        .text()
    ).toEqual("second")
  })

  it("handles custom rules", () => {
    const customRules = {
      ...defaultRules,
      paragraph: {
        ...defaultRules.paragraph,
        react: (node, output, state) => {
          return (
            <Serif size="3t" color="black60" key={state.key}>
              {output(node.content, state)}
            </Serif>
          )
        },
      },
    }

    const componentList = renderMarkdown("This is a first paragraph\n\nThis is a second paragraph", customRules) as any
    expect(componentList.length).toEqual(4)

    const renderedComponent = shallow(<Flex>{componentList}</Flex>)
    expect(renderedComponent.find(Sans).length).toEqual(0)
    expect(renderedComponent.find(Serif).length).toEqual(2)

    expect(
      renderedComponent
        .find(Serif)
        .at(0)
        .text()
    ).toEqual("This is a first paragraph")

    expect(
      renderedComponent
        .find(Serif)
        .at(1)
        .text()
    ).toEqual("This is a second paragraph")
  })
})
