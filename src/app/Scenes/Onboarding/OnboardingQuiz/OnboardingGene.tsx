import { Flex, Button } from "@artsy/palette-mobile"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { OnboardingGeneQuery } from "__generated__/OnboardingGeneQuery.graphql"
import { InfiniteScrollArtworksGridContainer as InfiniteScrollArtworksGrid } from "app/Components/ArtworkGrids/InfiniteScrollArtworksGrid"
import { FullScreenLoadingImage } from "app/Components/FullScreenLoadingImage"
import { Screen } from "app/Components/Screen"
import { OnboardingNavigationStack } from "app/Scenes/Onboarding/OnboardingQuiz/OnboardingQuiz"
import { useBackHandler } from "app/utils/hooks/useBackHandler"
import { Suspense } from "react"
import { graphql, useLazyLoadQuery } from "react-relay"
import { GeneHeader, images } from "./Components/GeneHeader"

export type OnboardingGeneId = "artists-on-the-rise" | "trove" | "our-top-auction-lots"

interface OnboardingGeneProps {
  id: OnboardingGeneId
  description: string
}

const OnboardingGene: React.FC<OnboardingGeneProps> = ({ id, description }) => {
  // prevents Android users from going back with hardware button
  useBackHandler(() => true)
  const { navigate } = useNavigation<NavigationProp<OnboardingNavigationStack>>()

  const { gene } = useLazyLoadQuery<OnboardingGeneQuery>(OnboardingGeneScreenQuery, {
    id,
  })

  if (!gene?.artworks) {
    return null
  }

  return (
    <Screen>
      <Screen.Background>
        <GeneHeader geneID={id} description={description} gene={gene!} />
        <InfiniteScrollArtworksGrid
          // we are deliberately limiting the number of artworks shown in these grids
          loadMore={() => null}
          hasMore={() => false}
          connection={gene?.artworks}
          shouldAddPadding
        />
        <Flex p={2} backgroundColor="white">
          <Button block onPress={() => navigate("OnboardingPostFollowLoadingScreen")} mb={1}>
            Explore More on Artsy
          </Button>
        </Flex>
      </Screen.Background>
    </Screen>
  )
}

export const OnboardingGeneScreen: React.FC<OnboardingGeneProps> = (props) => (
  <Suspense
    fallback={
      <FullScreenLoadingImage
        imgSource={images[props.id]}
        spacerHeight="80px"
        loadingText={"Great choice" + "\n" + "We’re finding a collection for you"}
      />
    }
  >
    <OnboardingGene {...props} />
  </Suspense>
)

const OnboardingGeneScreenQuery = graphql`
  query OnboardingGeneQuery($id: String!) {
    gene(id: $id) {
      ...GeneHeaderFragment_Gene
      internalID
      artworks: filterArtworksConnection(
        first: 100
        page: 1
        sort: "-decayed_merch"
        height: "*-*"
        width: "*-*"
        priceRange: "*-*"
        marketable: true
        offerable: true
        inquireableOnly: true
        forSale: true
      ) {
        ...InfiniteScrollArtworksGrid_connection
      }
    }
  }
`
