import { Box, Flex, Sans, space } from "@artsy/palette"
import OpaqueImageView from "lib/Components/OpaqueImageView/OpaqueImageView"
import { CountdownTimer } from "lib/Scenes/Fair/Components/FairHeader/CountdownTimer"
import React from "react"
import { Dimensions } from "react-native"
import styled from "styled-components/native"

interface ViewingRoomHeaderProps {
  artwork: string
  title: string
}

const BackgroundImage = styled(OpaqueImageView)<{ height: number; width: number }>`
  position: absolute;
  height: 100%;
  width: 100%;
`

const CountdownContainer = styled.View`
  position: absolute;
  bottom: ${space(1)};
  right: 0;
  width: 50%;
`

const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
`

export class ViewingRoomHeader extends React.Component<ViewingRoomHeaderProps> {
  render() {
    const { width: screenWidth } = Dimensions.get("window")
    const imageHeight = 547
    const { artwork, title } = this.props

    return (
      <>
        <Box style={{ height: imageHeight, width: screenWidth, position: "relative" }}>
          <BackgroundImage imageURL={artwork} height={imageHeight} width={screenWidth} />
          <Overlay />
          <Flex flexDirection="row" justifyContent="center" alignItems="flex-start" px={2} py={2} height={100}>
            <Flex alignItems="center" flexDirection="column" flexGrow={1}>
              <Sans size="3" textAlign="center" color="white100">
                Viewing Room
              </Sans>
            </Flex>
          </Flex>
          <Flex flexDirection="row" justifyContent="center" alignItems="flex-end" px={2} height={imageHeight - 160}>
            <Flex alignItems="center" flexDirection="column" flexGrow={1}>
              <Sans size="6" textAlign="center" color="white100">
                {title}
              </Sans>
            </Flex>
          </Flex>
          <CountdownContainer>
            <CountdownTimer
              formattedOpeningHours=""
              startAt="2020-03-10T20:22:42+00:00"
              endAt="2020-04-22T10:24:31+00:00"
            />
          </CountdownContainer>
        </Box>
      </>
    )
  }
}
