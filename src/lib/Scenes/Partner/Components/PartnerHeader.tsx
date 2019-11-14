import { Box, Flex, Sans, Serif, Spacer } from "@artsy/palette"
import { PartnerHeader_partner } from "__generated__/PartnerHeader_partner.graphql"
import { get } from "lib/utils/get"
import React from "react"
import { Text } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import styled from "styled-components/native"
import { PartnerFollowButtonFragmentContainer as FollowButton } from "./PartnerFollowButton"

const PartnerHeader: React.FC<{
  partner: PartnerHeader_partner
}> = ({ partner }) => {
  const followsCount = get(partner, p => p.profile.counts.follows)
  const eligibleArtworks = get(partner, p => p.counts.eligibleArtworks)
  return (
    <>
      <Box mb={1} />
      <Flex flexDirection="row" justifyContent="center">
        <Box px={2}>
          <Serif style={{ textAlign: "center" }} size="5">
            {partner.name}
          </Serif>
          {(followsCount || eligibleArtworks) && (
            <>
              <TextWrapper style={{ textAlign: "center" }}>
                {eligibleArtworks && (
                  <>
                    <Sans size="2" weight="medium">
                      {eligibleArtworks.toLocaleString()}
                    </Sans>
                    <Sans size="2"> Works for sale</Sans>
                  </>
                )}
                {followsCount &&
                  eligibleArtworks && (
                    <Sans size="2">
                      {"  "}•{"  "}
                    </Sans>
                  )}
                {followsCount && (
                  <>
                    <Sans size="2" weight="medium">
                      {followsCount.toLocaleString()}
                    </Sans>
                    <Sans size="2"> Followers</Sans>
                  </>
                )}
              </TextWrapper>
            </>
          )}
          <Spacer mb={2} />
          <FollowButton partner={partner} />
        </Box>
      </Flex>
    </>
  )
}

export const PartnerHeaderContainer = createFragmentContainer(PartnerHeader, {
  partner: graphql`
    fragment PartnerHeader_partner on Partner {
      name
      profile {
        counts {
          follows
        }
      }
      counts {
        eligibleArtworks
      }
      ...PartnerFollowButton_partner
    }
  `,
})

export const TextWrapper = styled(Text)``
