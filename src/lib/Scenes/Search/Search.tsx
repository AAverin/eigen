import { color, Flex, Sans, Theme } from "@artsy/palette"
import SearchIcon from "lib/Icons/SearchIcon"
import React, { useRef, useState } from "react"
import { TouchableWithoutFeedback } from "react-native"
import { AutosuggestResults } from "./AutosuggestResults"
import { Input } from "./Input"
import { RecentSearches } from "./RecentSearches"

export const Search: React.FC = () => {
  const input = useRef<Input>()
  const [query, setQuery] = useState("")
  return (
    <Theme>
      <Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          p={2}
          pb={1}
          style={{ borderBottomWidth: 1, borderColor: color("black10") }}
        >
          <Input
            ref={input}
            placeholder="Search Artsy"
            icon={<SearchIcon />}
            onChangeText={q => setQuery(q.trim())}
            autoCorrect={false}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              input.current.clear()
              input.current.blur()
              setQuery("")
            }}
          >
            <Flex pl={1}>
              <Sans size="2" color="black60">
                Cancel
              </Sans>
            </Flex>
          </TouchableWithoutFeedback>
        </Flex>
        {query.trim() ? <AutosuggestResults query={query} /> : <RecentSearches />}
      </Flex>
    </Theme>
  )
}
