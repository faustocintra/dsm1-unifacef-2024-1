import { StyleSheet } from "react-native"

export const header = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  header: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "auto",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 30,
    fontSize: 10,
  },
  icons: {
    alignContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  storys: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    width: "98%",
    marginHorizontal: "auto",
    alignItems: "center",
  },
  storyPerfil: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1.8,
    padding: 1,
    borderColor: "#c13584",
  },
  storyWrapper: {
    // justifyContent: "center",
    alignItems: "center",
  },
})

