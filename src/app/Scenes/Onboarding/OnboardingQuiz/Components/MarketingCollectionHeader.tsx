import { Spacer, Flex, Text } from "@artsy/palette-mobile"
import { MarketingCollectionHeaderFragment_marketingCollection$key } from "__generated__/MarketingCollectionHeaderFragment_marketingCollection.graphql"
import { OnboardingMarketingCollectionSlug } from "app/Scenes/Onboarding/OnboardingQuiz/OnboardingMarketingCollection"
import { ImageBackground, ImageSourcePropType } from "react-native"
import { graphql, useFragment } from "react-relay"

interface MarketingCollectionHeaderProps {
  collectionSlug: OnboardingMarketingCollectionSlug
  description: string
  marketingCollection: MarketingCollectionHeaderFragment_marketingCollection$key
}

export const images: Record<OnboardingMarketingCollectionSlug, ImageSourcePropType> = {
  "artists-on-the-rise": require("images/CohnMakeAMountain.jpg"),
  "curators-picks-emerging": require("images/HirstTheWonder.jpg"),
  "top-auction-lots": require("images/HirstTheWonder.jpg"),
}

const SAVE_INSTRUCTIONS = "Love an artwork? Tap the heart to save it."

export const MarketingCollectionHeader: React.FC<MarketingCollectionHeaderProps> = ({
  collectionSlug,
  marketingCollection,
  description,
}) => {
  const collection = useFragment(marketingCollectionHeaderFragment, marketingCollection)

  return (
    <ImageBackground resizeMode="cover" source={images[collectionSlug]}>
      <Flex pt={6} px={2}>
        <Text variant="xl" color="white100">
          {collection.title}
        </Text>
        <Spacer y={2} />
        <Text variant="sm" color="white100">
          {description}
        </Text>
        <Spacer y={2} />
        <Text variant="sm" color="white100">
          {SAVE_INSTRUCTIONS}
        </Text>
        <Spacer y={4} />
      </Flex>
    </ImageBackground>
  )
}

const marketingCollectionHeaderFragment = graphql`
  fragment MarketingCollectionHeaderFragment_marketingCollection on MarketingCollection {
    title
  }
`
