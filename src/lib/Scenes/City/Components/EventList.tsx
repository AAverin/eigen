import { Box, Message, Separator, Theme } from "@artsy/palette"
import { CitySectionList_city } from "__generated__/CitySectionList_city.graphql"
import { ShowItemRow } from "lib/Components/Lists/ShowItemRow"
import { BucketKey } from "lib/Scenes/Map/Bucket"
import React from "react"
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from "react-native"
import { RelayProp } from "react-relay"
import { TabFairItemRow } from "./TabFairItemRow"

interface Props {
  bucket: CitySectionList_city["shows"]["edges"]
  type: BucketKey
  cityName: string
  relay: RelayProp
  onScroll?: (event?: NativeSyntheticEvent<NativeScrollEvent>) => void
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
    const { bucket, onScroll } = this.props
    return (
      <FlatList
        data={bucket}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={item => item.node.id}
        renderItem={({ item }) => this.renderItem(item)}
        onScroll={onScroll}
        scrollIndicatorInsets={{ right: -10 }}
      />
    )
  }

  hasNoEventsComponent = () => {
    const { type, cityName } = this.props
    switch (type) {
      case "saved":
        return (
          <Box py={2}>
            <Message textSize="3t">{`You haven’t saved any shows in ${cityName}. When you save shows, they will show up here.`}</Message>
          </Box>
        )
      case "fairs":
        return (
          <Box py={2}>
            <Message textSize="3t">{`There are currently no active fairs. Check back later to view fairs in ${cityName}.`}</Message>
          </Box>
        )
      default:
        return (
          <Box py={2}>
            <Message textSize="3t">{`There are currently no active ${type.toLowerCase()} shows. Check back later to view shows in ${cityName}.`}</Message>
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
