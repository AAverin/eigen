import { Box, Separator, Theme } from "@artsy/palette"
import { BucketKey, BucketResults } from "lib/Scenes/Map/Bucket"
import React from "react"
import { FlatList } from "react-native"
import { TabListItem } from "./TabListItem"

interface Props {
  currentBucket: BucketKey
  bucket: any
  type: string
}

export class CityTab extends React.Component<Props> {
  render() {
    const { bucket, type } = this.props
    return (
      <Theme>
        <Box px={2}>
          <FlatList
            data={bucket}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TabListItem item={item} type={type} />}
            scrollEnabled={false}
          />
        </Box>
      </Theme>
    )
  }
}
