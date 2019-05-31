import { color, Flex, space, Spacer } from "@artsy/palette"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Animated, Dimensions, FlatList, Image, Modal, ScrollView, TouchableWithoutFeedback, View } from "react-native"
import { Spring } from "react-spring/dist/native.cjs.js"

interface ImageProps {
  url: string
  width: number
  height: number
}

interface CarouselItem extends ImageProps {
  thumbnail?: ImageProps
}

interface Measurements {
  width: number
  height: number
  marginLeft: number
  marginRight: number
  marginTop: number
  marginBottom: number
  cumulativeOffset: number
}

interface CarouselProps {
  items: ReadonlyArray<CarouselItem>
}

const screenHeight = Dimensions.get("screen").height
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const cardHeight = windowWidth >= 375 ? 340 : 290
const cardBoundingBox = { width: windowWidth, height: cardHeight }
const windowBoundingBox = { width: windowWidth, height: windowHeight }

function getMeasurements({
  item,
  boundingBox,
}: {
  item: CarouselItem
  boundingBox: {
    width: number
    height: number
  }
}) {
  const aspectRatio = item.width / item.height

  let height = boundingBox.height
  let width = aspectRatio * boundingBox.height

  if (width > boundingBox.width) {
    width = boundingBox.width
    height = boundingBox.width / aspectRatio
  }

  const horizontalMargin = (boundingBox.width - width) / 2
  const verticalMargin = (boundingBox.height - height) / 2

  return {
    width,
    height,
    marginLeft: horizontalMargin,
    marginRight: horizontalMargin,
    marginTop: verticalMargin,
    marginBottom: verticalMargin,
  }
}

export function FullScreenCarousel({
  items,
  onDismiss,
  imageIndex,
  setImageIndex,
}: CarouselProps & {
  imageIndex: number
  setImageIndex(index: number): void
  onDismiss(): void
}) {
  const onScroll = useCallback(
    e => {
      const index = Math.round(e.nativeEvent.contentOffset.x / windowWidth)
      setImageIndex(index)
    },
    [setImageIndex]
  )

  const scrollY = useMemo(() => new Animated.Value(screenHeight), [])

  return (
    <Modal transparent>
      <Animated.ScrollView
        snapToInterval={screenHeight}
        contentOffset={{ x: 0, y: screenHeight }}
        decelerationRate="fast"
        style={{
          backgroundColor: "white",
          opacity: scrollY.interpolate({
            inputRange: [0, screenHeight],
            outputRange: [0, 1],
          }),
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
            listener(ev) {
              // @ts-ignore
              if (ev.nativeEvent.contentOffset.y < 50) {
                onDismiss()
              }
            },
          }
        )}
        bounces={false}
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: screenHeight, opacity: 0 }} />
        <FlatList<CarouselItem>
          data={items}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth}
          decelerationRate="fast"
          keyExtractor={item => item.url}
          onScroll={onScroll}
          initialScrollIndex={imageIndex}
          getItemLayout={(_item, index: number) => ({ length: windowWidth, offset: windowWidth * index, index })}
          renderItem={({ item }) => {
            const { width, height } = getMeasurements({
              item,
              boundingBox: windowBoundingBox,
            })
            return (
              <ScrollView
                bounces={false}
                overScrollMode="never"
                minimumZoomScale={1}
                maximumZoomScale={4}
                centerContent
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ height: screenHeight }}
              >
                <Image
                  style={{
                    width,
                    height,
                  }}
                  source={{ uri: item.url }}
                />
              </ScrollView>
            )
          }}
        />
      </Animated.ScrollView>
    </Modal>
  )
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const measurements = useMemo(
    () => {
      const result: Measurements[] = []
      for (const item of items) {
        const sizes = getMeasurements({ item, boundingBox: cardBoundingBox })
        if (result.length === 0) {
          result.push({ ...sizes, cumulativeOffset: 0 })
        } else {
          const prev = result[result.length - 1]
          const marginLeft = Math.max(sizes.marginLeft - prev.marginRight, 0)
          result.push({
            ...sizes,
            cumulativeOffset: prev.cumulativeOffset + windowWidth - (sizes.marginRight - marginLeft),
            marginLeft,
          })
        }
      }
      return result
    },
    [items]
  )

  const offsets = useMemo(() => measurements.map(({ cumulativeOffset }) => cumulativeOffset), [measurements])
  const [fullScreen, setFullScreen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const onScroll = useCallback(
    e => {
      // binary search to find closest element in offsets
      const x = e.nativeEvent.contentOffset.x
      let lowIndex = 0
      let highIndex = offsets.length - 1

      while (highIndex - lowIndex > 1) {
        const midIndex = Math.floor((highIndex + lowIndex) / 2)
        if (x < offsets[midIndex]) {
          highIndex = midIndex
        } else {
          lowIndex = midIndex
        }
      }

      if (Math.abs(x - offsets[lowIndex]) < Math.abs(x - offsets[highIndex])) {
        setImageIndex(lowIndex)
      } else {
        setImageIndex(highIndex)
      }
    },
    [setImageIndex, offsets]
  )
  const ref = useRef<FlatList<any>>(null)

  useEffect(
    () => {
      if (ref.current && fullScreen) {
        ref.current.scrollToIndex({ animated: false, index: imageIndex })
      }
    },
    [imageIndex, fullScreen]
  )
  return (
    <View>
      <FlatList<CarouselItem>
        ref={ref}
        data={items}
        horizontal
        scrollEnabled={items.length > 1}
        showsHorizontalScrollIndicator={false}
        snapToOffsets={offsets}
        keyExtractor={item => item.url}
        decelerationRate={0.1}
        canCancelContentTouches
        onScroll={onScroll}
        renderItem={({ item, index }) => {
          let styles = getMeasurements({ item, boundingBox: cardBoundingBox })
          if (index > 0) {
            const prevStyles = getMeasurements({ item: items[index - 1], boundingBox: cardBoundingBox })
            styles = { ...styles, marginLeft: Math.max(styles.marginLeft - prevStyles.marginLeft, 0) }
          }
          return (
            <TouchableWithoutFeedback onPress={() => setFullScreen(true)}>
              <Image
                source={{ uri: item.url }}
                style={{
                  ...styles,
                }}
              />
            </TouchableWithoutFeedback>
          )
        }}
      />
      <Spacer mb={space(2)} />
      {items.length > 1 && (
        <Flex flexDirection="row" justifyContent="center">
          {items.map((_, index) => (
            <PaginationDot key={index} diameter={5} selected={index === imageIndex} />
          ))}
        </Flex>
      )}
      {fullScreen && (
        <FullScreenCarousel
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          items={items}
          onDismiss={() => setFullScreen(false)}
        />
      )}
    </View>
  )
}

const PaginationDot: React.FC<{ diameter: number; selected: boolean }> = ({ diameter, selected }) => {
  return (
    <View
      style={{
        width: diameter,
        height: diameter,
        marginHorizontal: diameter * 0.8,
      }}
    >
      <Spring
        from={{
          diameter: selected ? 0 : diameter,
        }}
        to={{
          diameter: selected ? diameter : 0,
        }}
        config={{ tension: 180, friction: 12 }}
      >
        {props => (
          <>
            <Dot diameter={10 - diameter} backgroundColor={color("black10")} />
            <Dot diameter={props.diameter * 1.2} backgroundColor="black" />
          </>
        )}
      </Spring>
    </View>
  )
}

const Dot: React.FC<{ diameter: number; backgroundColor: string }> = ({ diameter, backgroundColor }) => (
  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        borderRadius: diameter / 2,
        width: diameter,
        height: diameter,
        backgroundColor,
      }}
    />
  </View>
)
