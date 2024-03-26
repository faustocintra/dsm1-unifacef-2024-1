import { StyleSheet } from "react-native";

const stylesCard = StyleSheet.create({
  cardAlcool: {
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: 'green',
    padding: 10
  },
  cardGasoline: {
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: 'orange',
    padding: 10
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
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

export default stylesCard