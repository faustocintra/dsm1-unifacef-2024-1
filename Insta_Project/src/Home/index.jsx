import { LinearGradient } from "expo-linear-gradient"; // Importa o componente LinearGradient da biblioteca expo-linear-gradient
import React from "react"; // Importa a biblioteca React
import { Text, View, StyleSheet, Image } from "react-native"; // Importa os componentes Text, View, StyleSheet e Image da biblioteca react-native

const HomePage = ({ }) => {
  return (
    <View style={fn_styles.container}>
      {/* Cabeçalho / Notificações / Direct Messenger */}
      <View style={fn_styles.header}>
        <Image source={require("../../assets/text-icon-insta.png")} style={fn_styles.logo} /> {/* Logo do Instagram */}
        <View style={fn_styles.headerNav}>
          <Image source={require("../../assets/like-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de curtida */}
          <Image source={require("../../assets/direct-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de direct messenger */}
        </View>
      </View>

      {/* Story User */}
      <View style={fn_styles.Stories}>
        <View style={fn_styles.Story}>
          <View style={fn_styles.Storyplus}>
            <Image source={require("../../assets/plus-icon.png")} style={fn_styles.storyplus} /> {/* Ícone de adicionar story */}
          </View>
          <Image source={require("../../assets/userImage.jpg")} style={fn_styles.story} /> {/* Imagem do usuário */}
          <Text>Seu story</Text> {/* Texto do story do usuário */}
        </View>

        {/* Stories geral */}
        <View style={fn_styles.Story}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={fn_styles.gradient}
          /> {/* Gradiente para os stories */}
          <Image source={require("../../assets/userImage.jpg")} style={fn_styles.story} /> {/* Imagem do usuário nos stories */}
          <Text>mauro__</Text> {/* Nome do usuário nos stories */}
        </View>
        <View style={fn_styles.Story}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={fn_styles.gradient}
          /> {/* Gradiente para os stories */}
          <Image source={require("../../assets/userImage.jpg")} style={fn_styles.story} /> {/* Imagem do usuário nos stories */}
          <Text>lais_As</Text> {/* Nome do usuário nos stories */}
        </View>
        <View style={fn_styles.Story}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={fn_styles.gradient}
          /> {/* Gradiente para os stories */}
          <Image source={require("../../assets/userImage.jpg")} style={fn_styles.story} /> {/* Imagem do usuário nos stories */}
          <Text>Fael_Ssouza</Text> {/* Nome do usuário nos stories */}
        </View>
      </View>

      {/* Feed */}
      <View>

        {/* Cabeçalho do Feed */}
        <View style={fn_styles.containerFeedHeader}>
          <View style={fn_styles.userContainer}>
            <Image source={require("../../assets/userImage.jpg")} style={fn_styles.Feed} /> {/* Imagem do usuário no feed */}
            <Text style={fn_styles.userName}>ricardo__derosa</Text> {/* Nome do usuário no feed */}
          </View>
          <Image source={require("../../assets/more.png")} style={fn_styles.more} /> {/* Ícone de mais opções */}
        </View>

        {/* Imagem do Feed */}
        <Image source={require("../../assets/userImage.jpg")} style={fn_styles.feed} /> {/* Imagem principal do feed */}

        {/* Rodapé do Feed */}
        <View style={fn_styles.containerFeedFooter}>
          <View style={fn_styles.ActFooter}>
            <Image source={require("../../assets/like-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de curtida */}
            <Image source={require("../../assets/coment.png")} style={fn_styles.MenuIcon} /> {/* Ícone de comentário */}
            <Image source={require("../../assets/direct.png")} style={fn_styles.MenuIcon} /> {/* Ícone de direct messenger */}
          </View>
          <View style={fn_styles.UnderpostSave}>
            <Image source={require("../../assets/save.png")} style={fn_styles.MenuIcon} /> {/* Ícone de salvar post */}
          </View>
        </View>

        {/* Informações do Post */}
        <View style={fn_styles.UnderpostInfo}>
          <Text style={fn_styles.UnderpostText}>
            Curtido por <Text style={[fn_styles.userName, fn_styles.UnderpostText]}>mauro__ </Text> {/* Nome do usuário que curtiu */}
            e <Text style={[fn_styles.userName, fn_styles.UnderpostText]}>outras </Text> {/* Texto "outras" */}
            pessoas
          </Text>
          <Text style={fn_styles.UnderpostText}>
            <Text style={[fn_styles.userName, fn_styles.UnderpostText]}>ricardo__derosa</Text> {/* Nome do usuário que postou */}
            <Text> Hoc non pereo habebo fortior me. </Text> {/* Texto da descrição do post */}
          </Text>
        </View>

        <View style={fn_styles.containerActBar}>
          <Image source={require("../../assets/home-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de home */}
          <Image source={require("../../assets/search-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de busca */}
          <Image source={require("../../assets/reels-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de reels */}
          <Image source={require("../../assets/store-icon.png")} style={fn_styles.MenuIcon} /> {/* Ícone de loja */}
          <Image source={require("../../assets/userImage.jpg")} style={fn_styles.Feed} /> {/* Imagem do usuário */}
        </View>
      </View>
    </View>
  );
}

const fn_styles = StyleSheet.create({
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
    marginTop: 44,
  },
  logo: {
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
  MenuIcon: {
    objectFit: "contain",
    width: 24,
    height: 24,
  },
  // Stories
  Stories: {
    height: 102,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 4,
  },
  Story: {
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
  Storyplus: {
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
  storyplus: {
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
  Feed: {
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
  ActFooter: {
    flexDirection: "row",
    gap: 16
  },
  UnderpostSave: {
    marginRight: 8
  },
  UnderpostInfo: {
    marginTop: 4,
    paddingHorizontal: 8,
  },
  UnderpostText: {
    fontSize: 16,
  },
  // Action Bar
  containerActBar: {
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