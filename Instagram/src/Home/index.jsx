import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const HomePage = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/instagram-text-icon.png")} style={styles.logoHeader} />
        <View style={styles.headerNav}>
          <Image source={require("../../assets/notificacao-icone.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/direct-icone.png")} style={styles.iconMenu} />
        </View>
      </View>
      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image source={require("../../assets/icone-mais.png")} style={styles.storyAdd} />
          </View>
          <Image source={require("../../assets/user-geraldo.jpg")} style={styles.story} />
          <Text>Seu story</Text>

        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/user-geraldo.jpg")} style={styles.story} />
          <Text>Seu story</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/user-geraldo.jpg")} style={styles.story} />
          <Text>Seu story</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/user-geraldo.jpg")} style={styles.story} />
          <Text>Seu story</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 56,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 44,
  },
  logoHeader: {
    objectFit: "contain",
    width: 124,
    height: 50,
  },
  headerNav: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconMenu: {
    objectFit: "contain",
    width: 30,
    height: 30,
  },
  containerStories: {
    height: 102,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 4,
    marginTop: 12,
  },
  containerStory: {
    padding: 3.5,
    alignItems: "center",
    gap: 5,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
    borderRadius: "100%",
  },
  story: {
    objectFit: "contain",
    width: 88,
    height: 88,
    borderRadius: "100%",
    border: "solid",
    borderColor: "#fff",
    borderWidth: 2,
  },
  containerStoryAdd: {
    position: "absolute",
    right: 4,
    bottom: 24,
    zIndex: 1,
    width: 28,
    height: 28,
    borderRadius: "100%",
    border: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  storyAdd: {
    objectFit: "contain",
    width: 18,
    height: 18,
  }
});

export default HomePage