import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderColor: '#0000FF',
    backgroundColor: '#FFF2AC',
    padding: 15,
    borderWidth: 1,
    borderColor: "#0000FF",
  },
  nameContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 20
  },
  grade: {
    fontSize: 20,
    color: 'green',
  },
})

export default styles