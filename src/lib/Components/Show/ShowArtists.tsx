import { Theme } from "@artsy/palette"
import { ArtistListItem_artist } from "__generated__/ArtistListItem_artist.graphql"
import { ShowArtists_show } from "__generated__/ShowArtists_show.graphql"
import { ArtistsGroupedByName } from "lib/Components/ArtistsGroupedByName"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import { Schema, screenTrack } from "lib/utils/track"
import { get } from "lodash"
import React from "react"
import { ViewProperties } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"

interface Props extends ViewProperties {
  show: ShowArtists_show
}

interface State {
  data: Array<{
    artists: ArtistListItem_artist[]
    letter: string
  }>
}

@screenTrack<Props>(props => ({
  context_screen: Schema.PageNames.ShowAllArtists,
  context_screen_owner_type: Schema.OwnerEntityTypes.Show,
  context_screen_owner_slug: props.show.gravityID,
  context_screen_owner_id: props.show._id,
}))
export class ShowArtists extends React.Component<Props, State> {
  state = {
    data: [],
  }

  componentDidMount() {
    const { show } = this.props
    const artistsGroupedByName = get(show, "artists_grouped_by_name", []) as any

    this.setState({ data: artistsGroupedByName.map(({ letter, items }, index) => ({ letter, data: items, index })) })
  }

  handleViewArtist = (context, artist) => {
    SwitchBoard.presentNavigationViewController(context, artist)
  }

  render() {
    return (
      <Theme>
        <ArtistsGroupedByName data={this.state.data} Component={this} viewArtist={this.handleViewArtist.bind(this)} />
      </Theme>
    )
  }
}

export const ShowArtistsContainer = createFragmentContainer(ShowArtists, {
  show: graphql`
    fragment ShowArtists_show on Show {
      _id
      gravityID
      artists_grouped_by_name {
        letter
        items {
          ...ArtistListItem_artist
          sortable_id
          href
        }
      }
    }
  `,
})
