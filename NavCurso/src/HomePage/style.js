// style.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", 
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", 
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#007bff", 
    borderRadius: 5,
  },
  text: {
    color: "#fff", 
    fontSize: 16,
  },
});
