import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderColor: '#0000FF',
    backgroundColor: '#87CEFA',
    padding: 20,
    paddingTop: 20,
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 5
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  children: {
    fontSize: 16
  }
})

export default styles