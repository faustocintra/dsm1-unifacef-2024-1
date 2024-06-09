import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  arrow: {
    objectFit: "contain",
    width: 35,
    height: 35,
    position: "absolute",
    left: 20,
    top: 60,
  },
  btnCreateAccount: {
    padding: 15,
    width: "80%",
    borderRadius: 30,
    marginTop: 150,
    border: "solid",
    borderColor: "#2E82EA",
    borderWidth: 1.5,
  },
  btnLogin: {
    backgroundColor: "#2E82EA",
    padding: 15,
    margin: 10,
    width: "80%",
    borderRadius: 30,
    marginBottom: 15,
  },
  btnTextCreateAccount: {
    color: "#2E82EA",
    fontSize: 20,
    textAlign: "center",
  },
  btnTextLogin: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
  input: {
    backgroundColor: "#F0F0F0",
    width: "80%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    border: "solid",
    borderColor: "#DCE1EB",
    borderWidth: 1.5,
  },
  language: {
    fontSize: 16,
    marginBottom: 90,
    marginTop: 65,
    color: "#666666",
  },
  logoInstagram: {
    width: 90,
    height: 90,
    objectFit: "contain",
    marginBottom: 90,
  },
  logoMeta: {
    width: 120,
    height: 40,
    objectFit: "contain",
  },
  passwordAlert: {
    fontSize: 18,
  },
});
