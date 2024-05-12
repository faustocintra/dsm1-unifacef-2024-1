import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  button: {
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#6b9080",
    width: 150,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold'
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#FAF9F6'
  },
  infoText: {
    fontSize: 18,
    lineHeight: 30,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default styles;
