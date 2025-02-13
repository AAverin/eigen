import { Spacer, Flex, Text } from "@artsy/palette-mobile"
import { useNavigation } from "@react-navigation/native"
import { GeneHeaderFragment_Gene$key } from "__generated__/GeneHeaderFragment_Gene.graphql"
import { useOnboardingTracking } from "app/Scenes/Onboarding/OnboardingQuiz/Hooks/useOnboardingTracking"
import { OnboardingGeneId } from "app/Scenes/Onboarding/OnboardingQuiz/OnboardingGene"
import { FollowButton } from "app/Components/Button/FollowButton"
import { useCallback, useEffect, useState } from "react"
import { ImageBackground, ImageSourcePropType } from "react-native"
import { graphql, useFragment, useMutation } from "react-relay"
import { AnimatedTooltip } from "./AnimatedTooltip"

interface GeneHeaderProps {
  geneID: OnboardingGeneId
  description: string
  gene: GeneHeaderFragment_Gene$key
}

export const images: Record<OnboardingGeneId, ImageSourcePropType> = {
  "artists-on-the-rise": require("images/CohnMakeAMountain.jpg"),
  trove: require("images/HirstTheWonder.jpg"),
  "our-top-auction-lots": require("images/HirstTheWonder.jpg"),
}

const SAVE_INSTRUCTIONS = "Love an artwork? Tap the heart to save it."

export const GeneHeader: React.FC<GeneHeaderProps> = ({ geneID, gene, description }) => {
  const [shouldDisplayTooltip, setShouldDisplayTooltip] = useState(false)
  const [commit, isInFlight] = useMutation(FollowGeneMutation)

  const { name, isFollowed } = useFragment(GeneHeaderFragment, gene)
  const { trackGeneFollow } = useOnboardingTracking()
  const { getId } = useNavigation()

  const handleFollowGene = () => {
    trackGeneFollow(!!isFollowed, geneID, getId()!)

    commit({
      variables: {
        input: {
          geneID,
          unfollow: isFollowed,
        },
      },
    })
  }

  const showTooltip = useCallback(() => {
    setShouldDisplayTooltip(true)
  }, [])

  useEffect(() => {
    if (isFollowed) {
      showTooltip()
    }
  }, [showTooltip, isFollowed])

  return (
    <Flex>
      <ImageBackground style={{ height: 300 }} resizeMode="cover" source={images[geneID]}>
        <Flex pt={6} px={2}>
          <Text variant="lg-display" color="white100">
            {name}
          </Text>
          <Spacer y={2} />
          <Text variant="sm" color="white100">
            {SAVE_INSTRUCTIONS}
          </Text>
          <Spacer y={2} />
          <Text variant="sm" color="white100">
            {description}
          </Text>
          <Spacer y={2} />
          <FollowButton isFollowed={!!isFollowed} onPress={handleFollowGene} loading={isInFlight} />
        </Flex>
      </ImageBackground>
      {!!shouldDisplayTooltip && <AnimatedTooltip />}
    </Flex>
  )
}

const GeneHeaderFragment = graphql`
  fragment GeneHeaderFragment_Gene on Gene {
    name
    isFollowed
  }
`

const FollowGeneMutation = graphql`
  mutation GeneHeaderFollowButtonMutation($input: FollowGeneInput!) {
    followGene(input: $input) {
      gene {
        isFollowed
      }
    }
  }
`
