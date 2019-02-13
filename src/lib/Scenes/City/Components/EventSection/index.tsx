import { Box, Sans, Serif } from "@artsy/palette"
import { Event } from "lib/Scenes/City/Components/Event"
import React from "react"

export interface Props {
  title: string
  data: any
}

const renderEvents = events => {
  return events.map((event, i) => {
    if (i < 2) {
      return <Box key={i} mb={2}><Event event={event} /></Box>
    }
  })
}

export const EventSection: React.SFC<Props> = (props: Props) => {
  const { data } = props
  return (
    <>
      <Box my={3} px={3}>
        <Serif size="8">{props.title}</Serif>
      </Box>
      {renderEvents(data)}
      <Box px={3} mb={2}>
        <Sans weight="medium" size="3">
          View all {data.length} {props.title.toLowerCase()}
        </Sans>
      </Box>
    </>
  )
}
