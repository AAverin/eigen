import { fireEvent } from "@testing-library/react-native"
import {
  ArtworkFiltersState,
  ArtworkFiltersStoreProvider,
  useSelectedOptionsDisplay,
} from "app/Components/ArtworkFilter/ArtworkFilterStore"
import { Input } from "app/Components/Input"
import { __globalStoreTestUtils__ } from "app/store/GlobalStore"
import { extractText } from "app/utils/tests/extractText"
import { mockTrackEvent } from "app/utils/tests/globallyMockedStuff"
import { renderWithWrappers } from "app/utils/tests/renderWithWrappers"
import { debounce } from "lodash"
import { Text } from "react-native"
import { PriceRangeOptionsScreen } from "./PriceRangeOptions"
import { getEssentialProps } from "./helper"
import { Range } from "./helpers"

const DEFAULT_RANGE: Range = {
  min: "*",
  max: "*",
}

jest.mock("lodash", () => ({
  ...jest.requireActual("lodash"),
  debounce: jest.fn(),
}))

describe("CustomPriceInput", () => {
  it("renders without error", () => {
    renderWithWrappers(
      <Input value={DEFAULT_RANGE} onChange={jest.fn()} {...getEssentialProps()} />
    )
  })

  it("renders the min value", () => {
    const { getByTestId } = renderWithWrappers(
      <Input
        testID="price-min-input"
        value={{ min: 444, max: 99999 }}
        onChange={jest.fn()}
        {...getEssentialProps()}
      />
    )

    expect(getByTestId("price-min-input").props.value.min).toBe(444)
  })

  it("renders the max value", () => {
    const { getByTestId } = renderWithWrappers(
      <Input
        testID="price-max-input"
        value={{ min: 444, max: 99999 }}
        onChange={jest.fn()}
        {...getEssentialProps()}
      />
    )

    expect(getByTestId("price-max-input").props.value.max).toBe(99999)
  })

  it("calls onChange with the min when it is updated", () => {
    const handleChange = jest.fn()
    const { getByTestId } = renderWithWrappers(
      <Input
        testID="price-min-input"
        value={DEFAULT_RANGE}
        onChangeText={handleChange}
        {...getEssentialProps()}
      />
    )

    fireEvent.changeText(getByTestId("price-min-input"), "777")

    expect(handleChange).toHaveBeenCalledWith("777")
  })

  it("calls onChange with the max when it is updated", () => {
    const handleChange = jest.fn()
    const { getByTestId } = renderWithWrappers(
      <Input
        testID="price-max-input"
        value={DEFAULT_RANGE}
        onChangeText={handleChange}
        {...getEssentialProps()}
      />
    )

    fireEvent.changeText(getByTestId("price-max-input"), "12345")

    expect(handleChange).toHaveBeenLastCalledWith("12345")
  })
})

describe("PriceRangeOptions", () => {
  const INITIAL_DATA: ArtworkFiltersState = {
    selectedFilters: [],
    appliedFilters: [],
    previouslyAppliedFilters: [],
    applyFilters: false,
    aggregations: [],
    filterType: "artwork",
    counts: {
      total: null,
      followedArtists: null,
    },
    sizeMetric: "cm",
  }

  const MockPriceRangeOptionsScreen = () => {
    const selected = useSelectedOptionsDisplay()
    return (
      <>
        <Text testID="debug">{JSON.stringify(selected)}</Text>
        <PriceRangeOptionsScreen {...getEssentialProps()} />
      </>
    )
  }

  const getTree = () => {
    return renderWithWrappers(
      <ArtworkFiltersStoreProvider initialData={INITIAL_DATA}>
        <MockPriceRangeOptionsScreen />
      </ArtworkFiltersStoreProvider>
    )
  }

  beforeEach(() => {
    ;(debounce as jest.Mock).mockImplementation((func) => func)
  })

  it("renders the header and the inputs", () => {
    const { getByText, getByTestId } = getTree()

    expect(getByText("Choose Your Price Range")).toBeTruthy()

    expect(getByTestId("price-min-input")).toBeTruthy()
    expect(getByTestId("price-max-input")).toBeTruthy()
    expect(getByTestId("slider")).toBeTruthy()
  })

  it("dispatches a custom price", () => {
    const { getByTestId } = getTree()

    fireEvent.changeText(getByTestId("price-min-input"), "1111")
    fireEvent.changeText(getByTestId("price-max-input"), "98765")

    expect(extractText(getByTestId("debug"))).toContain(
      `{"displayText":"$1,111–98,765","paramValue":"1111-98765","paramName":"priceRange"}`
    )
  })

  it("dispatches the last entered price", () => {
    const { getByTestId } = getTree()

    fireEvent.changeText(getByTestId("price-min-input"), "1111")
    fireEvent.changeText(getByTestId("price-min-input"), "2222")

    expect(extractText(getByTestId("debug"))).toContain(
      `{"displayText":"$2,222+","paramValue":"2222-*","paramName":"priceRange"}`
    )
  })

  it('should display the "clear" button if a custom price is entered', () => {
    const { getByTestId, getByText } = getTree()

    fireEvent.changeText(getByTestId("price-min-input"), "1111")

    expect(getByText("Clear")).toBeTruthy()
  })

  it('should not display the "clear" button if the default value is selected', () => {
    const { queryByText } = getTree()

    expect(queryByText("Clear")).toBeNull()
  })

  it('selected value should be cleared when the "clear" button is pressed', () => {
    const { getByTestId, getByText } = getTree()
    const minInput = getByTestId("price-min-input")

    fireEvent.changeText(minInput, "1111")
    fireEvent.press(getByText("Clear"))

    expect(minInput.props.value).toBe("")
  })

  it("should not update input with a special character (included in android num-pad)", () => {
    const { getByTestId, queryByDisplayValue } = getTree()
    const minInput = getByTestId("price-min-input")

    fireEvent.changeText(minInput, ".")

    expect(minInput).toHaveProp("value", "")
    fireEvent.changeText(minInput, " ")
    expect(minInput).toHaveProp("value", "")
    fireEvent.changeText(minInput, "-")
    expect(minInput).toHaveProp("value", "")
    fireEvent.changeText(minInput, ",")
    expect(minInput).toHaveProp("value", "")

    fireEvent.changeText(minInput, "1242135")
    queryByDisplayValue("1242135")
  })

  describe("Recent price ranges analytics", () => {
    it("should correctly track analytics", () => {
      __globalStoreTestUtils__?.injectState({
        userPrefs: {
          priceRange: "0-5000",
        },
        recentPriceRanges: {
          ranges: ["0-100"],
        },
      })

      const { getByText } = getTree()

      fireEvent.press(getByText("$0–100"))

      expect(mockTrackEvent.mock.calls[0]).toMatchInlineSnapshot(`
        [
          {
            "action": "selectedRecentPriceRange",
            "collector_profile_sourced": false,
            "context_module": "recentPriceRanges",
            "context_screen_owner_type": "artworkPriceFilter",
          },
        ]
      `)
    })

    it("should correctly track analytics when the collector profile-sourced price range is selected", () => {
      __globalStoreTestUtils__?.injectState({
        userPrefs: {
          priceRange: "0-5000",
        },
        recentPriceRanges: {
          ranges: ["0-100"],
        },
      })

      const { getByText } = getTree()

      fireEvent.press(getByText("$0–5,000"))

      expect(mockTrackEvent.mock.calls[0]).toMatchInlineSnapshot(`
        [
          {
            "action": "selectedRecentPriceRange",
            "collector_profile_sourced": true,
            "context_module": "recentPriceRanges",
            "context_screen_owner_type": "artworkPriceFilter",
          },
        ]
      `)
    })
  })
})
