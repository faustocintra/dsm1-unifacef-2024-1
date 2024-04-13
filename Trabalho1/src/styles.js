import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
    color: "#000",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width: 80,
    borderColor: "blue",
    borderWidth: 2,
    marginBottom: 10,
    textAlign: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  raizes: {
    color: "blue",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
