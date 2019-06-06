import React from "react"
import { ScrollView, View } from "react-native"

import colors from "lib/data/colors"
import fonts from "lib/data/fonts"
import styled from "styled-components/native"

import TextInput, { TextInputProps } from "./TextInput"

const Result = styled.TouchableHighlight`
  height: 40;
  margin-bottom: 10;
`

const ResultContainers = styled.View`
  flex-direction: row;
  align-items: center;
`

const Image = styled.Image`
  height: 40;
  width: 40;
  border-radius: 20;
`

const Text = styled.Text`
  font-family: "${fonts["garamond-regular"]}";
  color: white;
  font-size: 20;
  padding-top: 8;
  margin-left: 13;
`

const UnknownLabel = styled.Text`
  font-family: "${fonts["garamond-regular"]}";
  color: ${colors["gray-medium"]};
  font-size: 17;
`

const UnknownName = styled.Text`
  font-family: "${fonts["garamond-italic"]}";
  color: ${colors["gray-medium"]};
  font-size: 17;
`

export interface SearchQueryProps<T> extends TextInputProps {
  results: T[] | null
  query: string
  placeholder: string
  noResultsMessage: string
  onChangeText?: (query: string) => void
  resultSelected?: (result: T) => void
}

const noResults = props => {
  if (!props.query || props.searching) {
    return null
  }
  return (
    <UnknownLabel>
      {props.noResultsMessage} <UnknownName>{props.query}</UnknownName>
    </UnknownLabel>
  )
}

function render<T>(props: SearchQueryProps<T>) {
  const rowForResult = result => (
    <Result key={result.id} onPress={() => props.resultSelected(result)}>
      <ResultContainers>
        {result.image && <Image source={{ uri: result.image.url }} />}
        <Text>{result.name}</Text>
      </ResultContainers>
    </Result>
  )

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        maxWidth: 540,
        alignSelf: "center",
        paddingTop: 20,
      }}
    >
      <TextInput
        searching={props.searching}
        preImage={props.preImage}
        text={{
          placeholder: props.placeholder,
          returnKeyType: "search",
          value: props.query,
          onChangeText: props.onChangeText,
          autoFocus: typeof jest === "undefined" /* TODO: https://github.com/facebook/jest/issues/3707 */,
        }}
      />

      <ScrollView
        style={{ height: 182, paddingTop: 16 }}
        scrollEnabled={props.results && !!props.results.length}
        keyboardShouldPersistTaps="always"
      >
        {props.results && props.results.length ? props.results.map(rowForResult) : noResults(props)}
      </ScrollView>
    </View>
  )
}

export class SearchResults<T> extends React.Component<SearchQueryProps<T>, null> {
  render() {
    return render<T>(this.props)
  }
}
