import { useSpace } from "@artsy/palette-mobile"
import { PillType } from "app/Scenes/Search/types"
import { Pill } from "app/Components/Pill"
import React from "react"
import { ScrollView } from "react-native"

export interface SearchPillsProps {
  loading?: boolean
  pills: PillType[]
  onPillPress: (pill: PillType) => void
  isSelected: (pill: PillType) => boolean
}

export const SearchPills = React.forwardRef<ScrollView, SearchPillsProps>((props, ref) => {
  const { loading = false, pills, onPillPress, isSelected } = props
  const space = useSpace()

  return (
    <ScrollView
      accessible
      accessibilityLabel="Scroll view for result type filter options"
      ref={ref}
      horizontal
      contentContainerStyle={{ paddingLeft: space(2), paddingRight: space(1) }}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {pills.map((pill) => {
        const { key, displayName } = pill
        const selected = isSelected(pill)
        const disabled = !!pill.disabled || !!loading || !!selected

        return (
          <Pill
            mr={1}
            key={key}
            accessibilityState={{ selected, disabled }}
            rounded
            selected={selected}
            disabled={disabled}
            onPress={() => onPillPress(pill)}
            block
          >
            {displayName}
          </Pill>
        )
      })}
    </ScrollView>
  )
})
