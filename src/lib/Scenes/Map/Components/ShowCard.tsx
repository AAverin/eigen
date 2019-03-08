import { Box, color, Sans, space } from "@artsy/palette"
import { ShowItemRow_show } from "__generated__/ShowItemRow_show.graphql"
import { ShowItemRow } from "lib/Components/Lists/ShowItemRow"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import { isEqual } from "lodash"
import React, { Component } from "react"
import { Dimensions, FlatList, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Show } from "../types"

const shadowDetails: any = {
  shadowRadius: 4,
  shadowColor: "black",
  shadowOpacity: 0.3,
  shadowOffset: { height: 0, width: 0 },
}

const Background = styled(Box)`
  background: ${color("white100")};
  height: 82;
  border-radius: 2px;
`

const screenWidth = Dimensions.get("window").width

interface ShowCardProps {
  shows: ShowItemRow_show[]
  onSave?: () => void
}

interface ShowCardState {
  currentPage: number
}

const PageIndicator = styled(Box)`
  height: ${space(2)}px;
  border-radius: ${space(1)}px;
  background: ${color("white100")};
  margin-left: 15px;
  margin-right: auto;
  margin-top: -15px;
`

export class ShowCard extends Component<ShowCardProps, ShowCardState> {
  list: FlatList<Show>

  state = {
    currentPage: 1,
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps, this.props) && this.list) {
      this.list.scrollToIndex({ index: 0, animated: true })
    }
  }

  handleTap(show) {
    const path = show.href
    SwitchBoard.presentNavigationViewController(this, path)

    if (this.props.onSave) {
      this.props.onSave()
    }
  }

  renderItem = ({ item }) => (
    <Background ml={1} p={1} style={shadowDetails} width={this.cardWidth}>
      <TouchableOpacity onPress={this.handleTap.bind(this, item)}>
        <ShowItemRow show={item} noPadding />
      </TouchableOpacity>
    </Background>
  )

  onScroll = e => {
    const newPageNum = Math.round(e.nativeEvent.contentOffset.x / screenWidth + 1)

    if (newPageNum !== this.state.currentPage) {
      this.setState({
        currentPage: newPageNum,
      })
    }
  }

  get scrollViewWidth() {
    return Math.round(Dimensions.get("window").width * 0.9)
  }

  get cardWidth() {
    return Dimensions.get("window").width - 40
  }

  render() {
    const { shows } = this.props
    const { currentPage } = this.state
    const hasOne = shows.length === 1
    const show = hasOne ? shows[0] : null

    return hasOne ? (
      show && (
        <Background m={1} p={1} style={shadowDetails}>
          <TouchableOpacity onPress={this.handleTap.bind(this)}>
            <ShowItemRow show={show} noPadding />
          </TouchableOpacity>
        </Background>
      )
    ) : (
      <>
        <PageIndicator style={shadowDetails} mx={1} py={0.3} px={0.5} my={0.5}>
          <Sans size="1" weight="medium" px={0.5}>{`${currentPage} of ${shows.length}`}</Sans>
        </PageIndicator>
        <FlatList
          ref={c => (this.list = c)}
          data={shows}
          style={{ marginHorizontal: "auto" }}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          onScroll={this.onScroll}
          showsHorizontalScrollIndicator={false}
          snapToInterval={this.cardWidth + space(1) + 1}
          contentContainerStyle={{ padding: space(0.5) }}
          scrollEventThrottle={299}
          directionalLockEnabled={true}
          overScrollMode="always"
          snapToAlignment="start"
          decelerationRate="fast"
          horizontal
        />
      </>
    )
  }
}
