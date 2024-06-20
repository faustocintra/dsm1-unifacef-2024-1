import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const HomePage = ({ }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require("../../assets/instagram-text-icon.png")} style={styles.logoHeader} />
        <View style={styles.headerNav}>
          <Image source={require("../../assets/curtida.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/direct.png")} style={styles.iconMenu} />
        </View>
      </View>


      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image source={require("../../assets/icone-mais.png")} style={styles.storyAdd} />
          </View>
          <Image source={require("../../assets/user.jpg")} style={styles.story} />
          <Text>Seu story</Text>
        </View>

        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/user.jpg")} style={styles.story} />
          <Text>User 1</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/user.jpg")} style={styles.story} />
          <Text>User 2</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/user.jpg")} style={styles.story} />
          <Text>User 3</Text>
        </View>
      </View>

      <View>
        <View style={styles.containerFeedHeader}>
          <View style={styles.userContainer}>
            <Image source={require("../../assets/user.jpg")} style={styles.userFeed} />
            <Text style={styles.userName}>usuário</Text>
          </View>
          <Image source={require("../../assets/more.png")} style={styles.more} />
        </View>


        <Image source={require("../../assets/user.jpg")} style={styles.feed} />

        <View style={styles.containerFeedFooter}>
          <View style={styles.FooterAction}>
            <Image source={require("../../assets/curtida.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/comentar.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/mensagem.png")} style={styles.iconMenu} />
          </View>
        </View>


        <View style={styles.PostInfo}>
          <Text style={styles.PostText}>
            Curtido por <Text style={[styles.userName, styles.PostText]}> User 1 </Text>
            e <Text style={[styles.userName, styles.PostText]}>outras </Text>
            pessoas
          </Text>
          <Text style={styles.PostText}>
            <Text style={[styles.userName, styles.PostText]}> usuário </Text>
            <Text> Legenda do post </Text>
          </Text>
        </View>
        
        

        <View style={styles.containerActionBar}>
          <Image source={require("../../assets/home.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/search.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/reels.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/store.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/user.jpg")} style={styles.userFeed} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 12,
  },

  header: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 56,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logoHeader: {
    objectFit: "contain",
    width: "25%",
    height: "70%",
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
    width: 24,
    height: 24,
  },

  containerStories: {
    height: 102,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 4,
    marginTop: 20,
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
    height: "75%",
    width: "98%",
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
  },

  containerFeedHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    padding: 8,
  },
  userContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  userFeed: {
    objectFit: "contain",
    width: 36,
    height: 36,
    borderRadius: "100%",
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  more: {
    objectFit: "contain",
    width: 28,
    height: 28,
  },
  feed: {
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
  containerFeedFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  FooterAction: {
    flexDirection: "row",
    gap: 16
  },
  PostSave: {
    marginRight: 8
  },
  PostInfo: {
    marginTop: 4,
    paddingHorizontal: 8,
  },
  PostText: {
    fontSize: 16,
  },

  containerActionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 85,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
});

export default HomePage