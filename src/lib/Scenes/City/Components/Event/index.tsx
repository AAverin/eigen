import { Box, color, Flex, Sans, Serif } from "@artsy/palette"
import { EventMutation } from "__generated__/EventMutation.graphql"
import InvertedButton from "lib/Components/Buttons/InvertedButton"
import OpaqueImageView from "lib/Components/OpaqueImageView"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import { Show } from "lib/Scenes/Map/types"
import { Schema, Track, track as _track } from "lib/utils/track"
import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import { commitMutation, graphql, RelayProp } from "react-relay"
import styled from "styled-components/native"

const TextContainer = styled(Box)`
  width: 200;
`

interface Props {
  relay: RelayProp
  event: Show
}

interface State {
  isFollowedSaving: boolean
}

const track: Track<Props, {}> = _track

@track()
export class Event extends React.Component<Props, State> {
  state = {
    isFollowedSaving: false,
  }

  handleShowSuccessfullyUpdated() {
    this.setState({
      isFollowedSaving: false,
    })
  }

  @track(props => {
    const { id, _id, is_followed } = props.event
    return {
      action_name: is_followed ? Schema.ActionNames.UnsaveShow : Schema.ActionNames.SaveShow,
      action_type: Schema.ActionTypes.Success,
      owner_type: Schema.OwnerEntityTypes.Show,
      owner_id: _id,
      owner_slug: id,
    } as any
  })
  handleSaveChange() {
    const node = this.props.event
    const { id: showSlug, __id: nodeID, _id: showID, is_followed: isShowFollowed } = node

    if (showID && showSlug && nodeID && !this.state.isFollowedSaving) {
      this.setState(
        {
          isFollowedSaving: true,
        },
        () => {
          return commitMutation<EventMutation>(this.props.relay.environment, {
            onCompleted: () => this.handleShowSuccessfullyUpdated(),
            mutation: graphql`
              mutation EventMutation($input: FollowShowInput!) {
                followShow(input: $input) {
                  show {
                    id
                    _id
                    is_followed
                  }
                }
              }
            `,
            variables: {
              input: {
                partner_show_id: showID,
                unfollow: isShowFollowed,
              },
            },
            optimisticResponse: {
              followShow: {
                show: {
                  id: showSlug,
                  _id: showID,
                  is_followed: !isShowFollowed,
                },
              },
            },
            updater: store => {
              store.get(nodeID).setValue(!isShowFollowed, "is_followed")
            },
          })
        }
      )
    }
  }

  handleTap = () => {
    SwitchBoard.presentNavigationViewController(this, `/show/${this.props.event.id}`)
  }

  render() {
    const node = this.props.event
    const { name, exhibition_period, partner, cover_image, is_followed } = node
    const { name: partnerName } = partner
    const { isFollowedSaving } = this.state
    const url = cover_image ? cover_image.url : null
    return (
      <TouchableWithoutFeedback onPress={() => this.handleTap()}>
        <Box mb={2} px={2}>
          {url && (
            <Box mb={2}>
              <OpaqueImageView imageURL={url} height={145} />
            </Box>
          )}
          <Flex flexDirection="row" flexWrap="nowrap" justifyContent="space-between">
            <TextContainer mb={2}>
              <Sans size="3" weight="medium" numberOfLines={1} ellipsizeMode="tail">
                {partnerName}
              </Sans>
              <Serif size="3t" numberOfLines={1} ellipsizeMode="tail">
                {name}
              </Serif>
              {exhibition_period && (
                <Sans size="2" color={color("black60")}>
                  {exhibition_period}
                </Sans>
              )}
            </TextContainer>
            <Box width={102} height={34}>
              <InvertedButton
                grayBorder={true}
                text={is_followed ? "Saved" : "Save"}
                onPress={() => this.handleSaveChange()}
                selected={is_followed}
                inProgress={isFollowedSaving}
              />
            </Box>
          </Flex>
        </Box>
      </TouchableWithoutFeedback>
    )
  }
}
