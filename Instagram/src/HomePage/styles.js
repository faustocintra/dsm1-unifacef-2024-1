import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  languageSelector: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  languageOption: {
    fontSize: 16,
    color: "#808080",
    backgroundColor: "transparent",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logoContainer: {
    width: 150,
    height: 150,
    marginBottom: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  textInput: {
    width: "60%",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  passwordReminder: {
    marginBottom: 30,
    fontWeight: "bold",
    color: "black",
  },
  createAccountButton: {
    borderColor: "#026df7",
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    width: "60%",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  createAccountButtonText: {
    color: "#026df7",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#026df7",
    borderRadius: 50,
    width: "60%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  accountCreationContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 60,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerNote: {
    fontSize: 16,
    color: "#000",
    textAlign: 'center',
  },
});

export default styles;
