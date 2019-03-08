import { Box, Message, Separator, Theme } from "@artsy/palette"
import { CitySectionList_city } from "__generated__/CitySectionList_city.graphql"
import { ShowItemRow } from "lib/Components/Lists/ShowItemRow"
import { BucketKey } from "lib/Scenes/Map/Bucket"
import React from "react"
import { FlatList } from "react-native"
import { RelayProp } from "react-relay"
import styled from "styled-components/native"
import { TabFairItemRow } from "./TabFairItemRow"

const StyledMessage = styled(Message)`
  text-align: center;
`

interface Props {
  bucket: CitySectionList_city["shows"]["edges"]
  type: BucketKey
  cityName: string
  relay: RelayProp
}

export class EventList extends React.Component<Props> {
  renderItem = item => {
    const { type } = this.props
    if (type === "fairs") {
      return <TabFairItemRow item={item} />
    } else {
      return <ShowItemRow show={item.node} relay={this.props.relay} />
    }
  }

  hasEventsComponent = () => {
    const { bucket } = this.props
    return (
      <FlatList
        data={bucket}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={item => item.node.id}
        renderItem={({ item }) => this.renderItem(item)}
        scrollEnabled={false}
      />
    )
  }

  hasNoEventsComponent = () => {
    const { type, cityName } = this.props
    switch (type) {
      case "saved":
        return (
          <Box py={2}>
            <StyledMessage textSize="3t">{`You haven’t saved any shows in ${cityName}. When you save shows, they will show up here.`}</StyledMessage>
          </Box>
        )
      case "fairs":
        return (
          <Box py={2}>
            <StyledMessage textSize="3t">{`There are currently no active fairs. Check back later to view fairs in ${cityName}.`}</StyledMessage>
          </Box>
        )
      default:
        return (
          <Box py={2}>
            <StyledMessage textSize="3t">{`There are currently no active ${type.toLowerCase()} shows. Check back later to view shows in ${cityName}.`}</StyledMessage>
          </Box>
        )
    }
  }

  render() {
    const { bucket } = this.props
    const hasEvents = bucket.length > 0
    return (
      <Theme>
        <Box px={2}>{hasEvents ? this.hasEventsComponent() : this.hasNoEventsComponent()}</Box>
      </Theme>
    )
  }
}
