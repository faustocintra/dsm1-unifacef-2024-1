import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 10,
  },
  container__image: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginBottom: 5,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 12,
  },
  post: {
    width: "100%",
    height: 384,
  },
  text: {
    fontWeight: "bold",
  },
  container__icons: {
    padding: 12,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 17,
    marginBottom: 8,
  },
  text__description: {
    fontWeight: "normal",
  },
});
export default styles;
