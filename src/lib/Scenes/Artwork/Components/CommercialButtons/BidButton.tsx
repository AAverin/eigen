import { Button, Sans } from "@artsy/palette"
import { BidButton_artwork } from "__generated__/BidButton_artwork.graphql"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import React from "react"
import { createFragmentContainer, graphql, RelayProp } from "react-relay"

export interface BidButtonProps {
  artwork: BidButton_artwork
  relay: RelayProp
}

export class BidButton extends React.Component<BidButtonProps> {
  setMaxBid = (newVal: number) => {
    this.setState({ selectedMaxBidCents: newVal })
  }

  handleBid = () => {
    SwitchBoard.presentModalViewController(this, `/bid/${this.props.artwork.slug}`)
  }

  redirectToRegister = () => {
    const { sale } = this.props.artwork
    SwitchBoard.presentModalViewController(this, `/auction-registration/${sale.id}`)
  }

  redirectToLiveBidding = () => {
    // FIXME: live bidding URL
    return null
  }

  redirectToBid = (firstIncrement: number) => {
    const { slug, sale } = this.props.artwork
    const bid = firstIncrement

    SwitchBoard.presentModalViewController(this, `/auction/${sale.id}/bid/${slug}?bid=${bid}`)
  }

  render() {
    const { artwork } = this.props

    if (artwork.sale && artwork.sale.isClosed) {
      return null
    }

    const registrationAttempted = !!artwork.sale.registrationStatus
    const registeredToBid = registrationAttempted && artwork.sale.registrationStatus.qualifiedForBidding

    /**
     * NOTE: This is making an incorrect assumption that there could only ever
     *       be 1 live sale with this work. When we run into that case, there is
     *       likely design work to be done too, so we can adjust this then.
     */
    const myLotStanding = artwork.myLotStanding && artwork.myLotStanding[0]
    const hasMyBids = !!(myLotStanding && myLotStanding.mostRecentBid)

    if (artwork.sale.isPreview) {
      return (
        <>
          {!registrationAttempted && (
            <Button width={100} size="large" mt={1} onClick={() => this.redirectToRegister()}>
              Register to bid
            </Button>
          )}
          {registrationAttempted &&
            !registeredToBid && (
              <Button width={100} size="large" mt={1} disabled>
                Registration pending
              </Button>
            )}
          {registrationAttempted &&
            registeredToBid && (
              <Button width={100} size="large" mt={1} disabled>
                Registration complete
              </Button>
            )}
        </>
      )
    } else if (artwork.sale.isLiveOpen) {
      return (
        <>
          {artwork.sale.isRegistrationClosed &&
            !registeredToBid && (
              <Sans size="2" color="black60" pb={1} textAlign="center">
                Registration closed
              </Sans>
            )}
          <Button width={100} size="large" onClick={() => this.redirectToLiveBidding()}>
            {artwork.sale.isRegistrationClosed && !registeredToBid ? "Watch live bidding" : "Enter live bidding"}
          </Button>
        </>
      )
    } else if (artwork.sale.isOpen) {
      if (registrationAttempted && !registeredToBid) {
        return (
          <Button width={100} size="large" disabled>
            Registration pending
          </Button>
        )
      }
      if (artwork.sale.isRegistrationClosed && !registeredToBid) {
        return (
          <Button width={100} size="large" disabled>
            Registration closed
          </Button>
        )
      }
    } else {
      const myLastMaxBid = hasMyBids && myLotStanding.mostRecentBid.maxBid.cents
      const increments = artwork.saleArtwork.increments.filter(increment => increment.cents > (myLastMaxBid || 0))
      const firstIncrement = increments && increments.length && increments[0]
      const incrementCents = firstIncrement && firstIncrement.cents

      return (
        <Button width={100} size="large" onClick={() => this.redirectToBid(incrementCents)}>
          {hasMyBids ? "Increase max bid" : "Bid"}
        </Button>
      )
    }
  }
}

export const BidButtonFragmentContainer = createFragmentContainer(BidButton, {
  artwork: graphql`
    fragment BidButton_artwork on Artwork {
      slug
      sale {
        id
        registrationStatus {
          qualifiedForBidding
        }
        isPreview
        isOpen
        isLiveOpen
        isClosed
        isRegistrationClosed
      }
      myLotStanding(live: true) {
        mostRecentBid {
          maxBid {
            cents
          }
        }
      }
      saleArtwork {
        increments {
          cents
          display
        }
      }
    }
  `,
})
