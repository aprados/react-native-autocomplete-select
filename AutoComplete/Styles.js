import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  suggestionsWrapper: {
    marginTop: 5,
    marginBottom: 5
  },
  suggestion: {
    height: 30,
    padding: 5,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  suggestionText: {
    fontSize: 15
  },
  inputText: {
    fontSize: 14,
    lineHeight: 43,
    color: '#110A24',
    fontFamily: 'Roboto-Medium',
    textAlign: 'right', 
    flex: 1
  },
  wrapper: {
    flex: 1
  },
  labelText: {
    fontSize: 14,
    lineHeight: 22,
    marginRight: 5,
    color: '#727A8F',
    fontFamily: 'Roboto-Regular',
  },
})

export default Styles
