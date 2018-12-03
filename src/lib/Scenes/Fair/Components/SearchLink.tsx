import { BorderBox, Box, Sans, Spacer } from "@artsy/palette"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import React from "react"
import { Image, TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"

const Icon = styled(Image)`
  width: 20;
  height: 20;
`

interface Props {
  fairID: string
}

export class SearchLink extends React.Component<Props> {
  handlePress = () => {
    const { fairID } = this.props
    SwitchBoard.presentNavigationViewController(this, `/${fairID}/search`)
  }

  render() {
    return (
      <Box>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <BorderBox justifyContent="center" alignItems="center" flexDirection="row" p={1}>
            <Icon source={require("../../../../../images/SearchButton.png")} />
            <Spacer width={12} />
            <Sans size="3" weight="medium">
              Find Exhibitors and Artists
            </Sans>
          </BorderBox>
        </TouchableWithoutFeedback>
      </Box>
    )
  }
}
