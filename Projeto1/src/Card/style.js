import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  card: {
    borderRadius: 16,
    borderColor: '#0000FF',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#87CEFA',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    // marginBottom: 5,
  },
  title: {
    fontSize: 30,
    paddingLeft: 5
  },
  children: {
    fontSize: 16,
    paddingLeft: 5
  }

});

export default styles