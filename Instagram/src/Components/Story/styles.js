import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerStory: {
    alignItems: "center",
    gap: 5,
    padding: 3.5,
  },
  containerStoryAdd: {
    alignItems: "center",
    backgroundColor: "#111",
    border: "solid",
    borderColor: "#fff",
    borderRadius: "100%",
    borderWidth: 2,
    bottom: 24,
    height: 28,
    justifyContent: "center",
    position: "absolute",
    right: 4,
    width: 28,
    zIndex: 1,
  },
  storyAdd: {
    height: 18,
    objectFit: "contain",
    width: 18,
  },
  story: {
    border: "solid",
    borderColor: "#fff",
    borderRadius: "100%",
    borderWidth: 2,
    height: 70,
    objectFit: "contain",
    width: 70,
  },
  gradient: {
    borderRadius: "100%",
    height: "100%",
    left: 0,
    position: "absolute",
    right: 0,
  },
});
