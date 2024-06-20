import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const HomeScreen = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/instagram-text-icon.png")}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <Image
            source={require("../../assets/curtida-icone.png")}
            style={styles.headerIcon}
          />
          <Image
            source={require("../../assets/direct-icone.png")}
            style={styles.headerIcon}
          />
        </View>
      </View>

      {/* Stories Section */}
      <View style={styles.storiesContainer}>
        <View style={styles.singleStory}>
          <View style={styles.addStoryIconWrapper}>
            <Image
              source={require("../../assets/icone-mais.png")}
              style={styles.addStoryIcon}
            />
          </View>
          <Image
            source={require("../../assets/images.png")}
            style={styles.storyImage}
          />
          <Text style={styles.storyLabel}>Your Story</Text>
        </View>
      </View>

      {/* Feed Section */}
      <View style={styles.feedSection}>
        <View style={styles.feedHeader}>
          <View style={styles.profileContainer}>
            <Image
              source={require("../../assets/images.png")}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Unifacef</Text>
          </View>
          <Image
            source={require("../../assets/more.png")}
            style={styles.moreIcon}
          />
        </View>
        <Image
          source={require("../../assets/imagem2.jpg")}
          style={styles.postImage}
        />
        <View style={styles.feedFooter}>
          <View style={styles.feedActions}>
            <Image
              source={require("../../assets/curtida-icone.png")}
              style={styles.footerIcon}
            />
            <Image
              source={require("../../assets/comentario.png")}
              style={styles.footerIcon}
            />
            <Image
              source={require("../../assets/direct.png")}
              style={styles.footerIcon}
            />
          </View>
          <View style={styles.savePost}>
            <Image
              source={require("../../assets/salvar.png")}
              style={styles.footerIcon}
            />
          </View>
        </View>
        <View style={styles.postDetails}>
          <Text style={styles.postText}>
            <Text style={styles.profileName}>Unifacef</Text> Teste </Text>
        </View>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Image
          source={require("../../assets/action_home.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../assets/action_search.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../assets/action_reels.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../assets/action_store.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../assets/images.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 9,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  logo: {
    width: 130,
    height: 50,
    top: 10,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 20,
    top: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  storiesContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
  singleStory: {
    alignItems: "center",
    marginRight: 8,
  },
  addStoryIconWrapper: {
    right: 5,
    bottom: 20,
    backgroundColor: "#111",
    borderRadius: 100,
    padding: 4,
    position: "absolute",
  },
  addStoryIcon: {
    width: 16,
    height: 16,
  },
  storyImage: {
    width: 88,
    height: 88,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#fff",
  },
  storyLabel: {
    marginTop: 5,
  },
  feedSection: {
    marginTop: 12,
  },
  feedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 100,
    resizeMode: "cover",
  },
  profileName: {
    marginLeft: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  moreIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  postImage: {
    width: "100%",
    height: 370,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 8,
  },
  feedFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  feedActions: {
    flexDirection: "row",
    gap: 16,
  },
  footerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  savePost: {
    marginRight: 8,
  },
  postDetails: {
    paddingHorizontal: 8,
    marginTop: 4,
  },
  postText: {
    fontSize: 16,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 20,
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default HomeScreen;
