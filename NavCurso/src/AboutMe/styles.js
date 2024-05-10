import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  backButtonContainer: {
    backgroundColor: "blue", 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 20, 
  },
  textButton: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold", 
    textAlign: "center", 
  },
});

export default styles;
