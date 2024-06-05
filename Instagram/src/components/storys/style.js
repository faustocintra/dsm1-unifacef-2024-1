import { StyleSheet } from "react-native"

export const story = StyleSheet.create({
  scroll: {
    width: "98%",
    marginHorizontal: "auto",
  },
  storyBlock: {
    flexDirection: "column",
    paddingHorizontal: 5,
    position: "relative",
  },
  entypoView: {
    position: "absolute",
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  entypo: {
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    borderRadius: 100,
  },
  viewStoryCircleProfile: {
    width: 68,
    height: 68,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  viewStoryCircle: {
    width: 68,
    height: 68,
    borderRadius: 100,
    borderWidth: 1.8,
    borderColor: "#c13584",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStoryCircle: {
    resizeMode: "cover",
    width: "92%",
    height: "92%",
    borderRadius: 100,
  },
})
