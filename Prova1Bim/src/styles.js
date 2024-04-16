import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 120,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 10,
    textAlign: "center",
    marginLeft: 10,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "green",
    marginBottom: 15,
  },
  label: {
    fontStyle: "italic",
  },
  result: {
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#CCFFFF",
    padding: 12,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});

export default styles;
