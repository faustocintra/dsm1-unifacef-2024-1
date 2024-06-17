import { Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderColor: "#D0D1D5",
    width: 300,
    marginVertical: 5,
  },
  pressableEntrar: {
    backgroundColor: "#0e68ce",
    width: 300,
    padding: 2,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  textEntrar: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    paddingVertical: 8,
  },
  pressableCriarConta: {
    borderWidth: 1.2,
    borderColor: "#0e68ce",
    borderRadius: 20,
    padding: 2,
    marginTop: 180,
  },
  text: {
    fontSize: 16,
    width: 300,
    textAlign: "center",
    paddingVertical: 8,
    color: "#0e68ce",
  },
  textSenha: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textMeta: {
    paddingTop: 20,
    fontSize: 20,
    paddingLeft: 5,
    color: "#4F5D60",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginVertical: 80,
  },
  iconMeta: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginTop: 20,
    color: "#4F5D60",
  },
  flexSeta: {
    marginTop: 30,
    width: "70%",
  },
  seta: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});

export default styles;
