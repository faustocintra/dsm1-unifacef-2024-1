import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  language: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "end",
    marginVertical: 20,
  },
  meta: {
    fontWeight: 700,
    color: '#000,'
  },    
  iconContainer: {
    alignItems: "end",
    flexDirection: 'row',
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  icon: {
    width: 24,
    height: 24,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
  },
  text: {
    paddingTop: 10,
    fontWeight: 700,
  },
  outlined: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#3897f1",
    marginTop: 30,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  textOutilined: {
    color: "#3897f1",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3897f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
