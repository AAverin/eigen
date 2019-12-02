import { Box, color, Flex, Sans, space, Spacer } from "@artsy/palette"
import { Schema } from "lib/utils/track"
import { useScreenDimensions } from "lib/utils/useScreenDimensions"
import React, { useRef, useState } from "react"
import { NativeModules, TouchableOpacity, View } from "react-native"
import Animated from "react-native-reanimated"
import { useTracking } from "react-tracking"
import styled from "styled-components/native"
import { useAnimatedValue } from "./reanimatedHelpers"
import { SnappyHorizontalRail } from "./SnappyHorizontalRail"
import { StickyTabScrollView } from "./StickyTabScrollView"
const { ARSwitchBoardModule } = NativeModules

interface TabProps {
  initial?: boolean
  title: string
  content: JSX.Element
}

/**
 * This page wrapper encapsulates a disappearing header and sticky tabs each with their own content
 *
 * At the moment all tabs are rendered at all times, as this isn't designed for more than 3 tabs
 * but if we need to have conditional rendering of tab content in the future it should be possible.
 *
 * Each tab optionally consumes a 'scroll view context' which could potentialy contain information
 * about whether the tab is being shown currently etc.
 */
export const StickyTabPage: React.FC<{
  tabs: TabProps[]
  headerContent: JSX.Element
}> = ({ tabs, headerContent }) => {
  const { width } = useScreenDimensions()
  const [activeTabIndex, setActiveTabIndex] = useState(Math.max(tabs.findIndex(tab => tab.initial), 0))
  const [headerHeight, setHeaderHeight] = useState<null | number>(null)
  const tracking = useTracking()
  const headerOffsetY = useAnimatedValue(0)
  const viewControllerRef = useRef(null)

  const shouldHideBackButton = Animated.lessOrEq(headerOffsetY, -10)

  Animated.useCode(
    () =>
      Animated.onChange(
        shouldHideBackButton,
        Animated.call([shouldHideBackButton], ([shouldHide]) => {
          if (viewControllerRef.current) {
            ARSwitchBoardModule.updateShouldHideBackButton(shouldHide)
          }
        })
      ),
    []
  )

  const handleTabPress = index => {
    setActiveTabIndex(index)
    tracking.trackEvent({
      action_name: tabs[index].title,
      action_type: Schema.ActionTypes.Tap,
    })
  }

  return (
    <View style={{ flex: 1, position: "relative", overflow: "hidden" }} ref={viewControllerRef}>
      {/* put tab content first because we want the header to be absolutely positioned _above_ it */}
      {headerHeight !== null && (
        <SnappyHorizontalRail offset={activeTabIndex * width}>
          {tabs.map(({ content }, index) => {
            return (
              <View style={{ flex: 1, width }} key={index}>
                <StickyTabScrollView
                  headerHeight={headerHeight}
                  content={content}
                  headerOffsetY={headerOffsetY}
                  isActive={index === activeTabIndex}
                />
              </View>
            )
          })}
        </SnappyHorizontalRail>
      )}
      <Animated.View
        style={{
          width,
          top: 0,
          position: "absolute",
          backgroundColor: color("white100"),
          transform: [{ translateY: headerOffsetY as any }],
        }}
      >
        <View onLayout={e => setHeaderHeight(e.nativeEvent.layout.height)}>
          {headerContent}
          <Spacer mb={1} />
        </View>
        <StickyTabBar>
          {tabs.map(({ title }, index) => (
            <StickyTab
              key={title}
              label={title}
              active={activeTabIndex === index}
              onPress={() => handleTabPress(index)}
            />
          ))}
        </StickyTabBar>
      </Animated.View>
    </View>
  )
}

export const TAB_BAR_HEIGHT = 48

const StickyTabBar = styled(Flex)`
  border-bottom-width: 1;
  border-bottom-color: ${color("black30")};
  height: ${TAB_BAR_HEIGHT};
  flex-direction: row;
  padding-right: ${space(2)};
  padding-left: ${space(2)};
`

export const StickyTab: React.FC<{ label: string; active: boolean; onPress(): void }> = ({
  label,
  active,
  onPress,
}) => {
  return (
    <Flex style={{ flex: 1, height: TAB_BAR_HEIGHT }}>
      <TouchableOpacity onPress={onPress}>
        <Box
          style={{
            height: TAB_BAR_HEIGHT,
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: active ? color("black100") : color("black30"),
          }}
        >
          <Sans size="3" weight={active ? "medium" : "regular"}>
            {label}
          </Sans>
        </Box>
      </TouchableOpacity>
    </Flex>
  )
}
