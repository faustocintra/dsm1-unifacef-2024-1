import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 20, 
  },
  buttonContainer: {
    marginBottom: 10, 
    width: "22%", 
  },
  button: {
    marginBottom: 10, 
    backgroundColor: "#007bff", 
    borderRadius: 5, 
    padding: 10, 
  },
  buttonText: {
    fontSize: 16,
    color: "#fff", 
    textAlign: "center", 
  },
});

export default styles;
