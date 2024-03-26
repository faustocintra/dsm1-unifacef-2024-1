import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFE0',
    border: '2px solid #FF4500',
    padding: 20,
    position: 'absolute',
    top: 380,
    left: 0,
    right: 0,
    zIndex: 10,
    borderRadius:20,
  },
  title: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 5
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  horizontal: {
    flexDirection: 'row'
  },
  textBlue: {
    color: '#0000CD'
  },
  textGreen: {
    color: 'green',
  },
  textRed: {
    color: 'red',
  },
})

export default styles