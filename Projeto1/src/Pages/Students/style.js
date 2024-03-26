import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderColor: '#ffa500',
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: '#ffffe0',
    padding: 10
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ffa500',
    marginBottom: 5
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  titleApproved: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "green"
  },
  titleReproved: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "red"
  },
  subTitle: {
    fontSize: 20,
    padding: 2
  }
});

export default styles