import { Box, color, Flex, Serif } from "@artsy/palette"
import React, { Component } from "react"
import styled from "styled-components/native"
import { EventEmitter } from "../Map/EventEmitter"

export interface City {
  name: string
  epicenter: {
    lat: number
    lng: number
  }
}

interface State {
  shows: [any]
  fairs: [any]
}

export class CityView extends Component<null, State> {
  componentWillMount() {
    EventEmitter.subscribe("map:change", ({ city }) => {
      const { shows, fairs } = city
      console.log(city)

      this.setState({
        shows,
        fairs,
      })
    })
  }

  render() {
    return (
      <Box>
        <Flex py={3} alignItems="center">
          <Handle />
        </Flex>
        <Box px={3}>
          <Serif size="8">All Events</Serif>
        </Box>
      </Box>
    )
  }
}

const Handle = styled.View`
  width: 40px;
  height: 5px;
  border-radius: 2.5px;
  background-color: ${color("black30")};
`
