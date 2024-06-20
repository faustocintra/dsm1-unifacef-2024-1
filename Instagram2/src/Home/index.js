import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const HomePage = ({ }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho / Notificações / Direct Messenger */}
      <View style={styles.header}>
        <Text>Instagram</Text>
        <View style={styles.headerNav}>
          <Image source={require("../../assets/like.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/direct.png")} style={styles.iconMenu} />
        </View>
      </View>

      {/* Story User */}
      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image source={require("../../assets/moreStorie.png")} style={styles.storyAdd} />
          </View>
          <Image source={require("../../assets/CR7.jpg")} style={styles.story} />
          <Text>Seu story</Text>
        </View>

        {/* Stories geral*/}
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/CR7.jpg")} style={styles.story} />
          <Text>Papai_Cris07</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/CR7.jpg")} style={styles.story} />
          <Text>CR7_lenda</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/CR7.jpg")} style={styles.story} />
          <Text>Robozao__</Text>
        </View>
      </View>

      {/* Feed */}
      <View>

        {/* Cabeçalho do Feed */}
        <View style={styles.containerFeedHeader}>
          <View style={styles.userContainer}>
            <Image source={require("../../assets/CR7.jpg")} style={styles.userFeed} />
            <Text style={styles.userName}>cr7cristianoronaldo</Text>
          </View>
          <Image source={require("../../assets/pontos.png")} style={styles.more} />
        </View>

        {/* Imagem do Feed */}
        <Image source={require("../../assets/CR7.jpg")} style={styles.feed} />

        {/* Rodapé do Feed */}
        <View style={styles.containerFeedFooter}>
          <View style={styles.FooterAction}>
            <Image source={require("../../assets/like.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/comentario.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/direct.png")} style={styles.iconMenu} />
          </View>
          <View style={styles.PostSave}>
            <Image source={require("../../assets/salvar.png")} style={styles.iconMenu} />
          </View>
        </View>

        {/* Informações do Post */}
        <View style={styles.PostInfo}>
          <Text style={styles.PostText}>
            Curtido por <Text style={[styles.userName, styles.PostText]}>Papai_Cris07 </Text>
            e <Text style={[styles.userName, styles.PostText]}>outras </Text>
            pessoas
          </Text>
          <Text style={styles.PostText}>
            <Text style={[styles.userName, styles.PostText]}>cr7cristianoronaldo</Text>
            <Text> O Robozão chegou, "Eu estou aqui, SIIIIIIIIIIIIIIII!!". </Text>
          </Text>
        </View>

        <View style={styles.containerActionBar}>
          <Image source={require("../../assets/home.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/pesquisa.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/reels.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/shop.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/CR7.jpg")} style={styles.userFeed} />
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
  // Cabeçalho / Notificações / Direct Messenger
  header: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 56,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
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
    width: 24,
    height: 24,
  },
  // Stories
  containerStories: {
    height: 102,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 4,
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
  },
  // Feed
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
  // Action Bar
  containerActionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 28,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});

export default HomePage