import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { stories } from "../utils/storyData";
import Story from "../Components/Story";

const HomePage = () => {
  const {
    container,
    header,
    logoHeader,
    headerNav,
    iconMenu,
    containerStories,
    containerFeedHeader,
    userContainer,
    userFeed,
    userName,
    more,
    feed,
    containerFeedFooter,
    FooterAction,
    PostSave,
    PostInfo,
    PostText,
    containerActionBar,
  } = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Image
          source={require("../../assets/instagram-nome.png")}
          style={logoHeader}
        />
        <View style={headerNav}>
          <Image
            source={require("../../assets/curtir_notificacoes.png")}
            style={iconMenu}
          />
          <Image source={require("../../assets/direct.png")} style={iconMenu} />
        </View>
      </View>
      <View style={containerStories}>
        {stories.map((story, index) => (
          <Story
            key={index}
            isOwnStory={story.isOwnStory}
            imageSource={story.imageSource}
            gradientColors={story.gradientColors}
            userName={story.userName}
          />
        ))}
      </View>
      <View>
        <ScrollView>
          <View>
            <View style={containerFeedHeader}>
              <View style={userContainer}>
                <Image
                  source={require("../../assets/foto-leandro.jpeg")}
                  style={userFeed}
                />
                <Text style={userName}>leandro0_vieira</Text>
              </View>
              <Image source={require("../../assets/opcoes.png")} style={more} />
            </View>
            <Image source={require("../../assets/red_hot.jpeg")} style={feed} />
            <View style={containerFeedFooter}>
              <View style={FooterAction}>
                <Image
                  source={require("../../assets/like.png")}
                  style={iconMenu}
                />
                <Image
                  source={require("../../assets/comentario.png")}
                  style={iconMenu}
                />
                <Image
                  source={require("../../assets/direct.png")}
                  style={iconMenu}
                />
              </View>
              <View style={PostSave}>
                <Image
                  source={require("../../assets/salvar.png")}
                  style={iconMenu}
                />
              </View>
            </View>
            <View style={PostInfo}>
              <Text style={PostText}>
                Curtido por{" "}
                <Text style={[userName, PostText]}> chilipeppers </Text>e{" "}
                <Text style={[userName, PostText]}>outras </Text>
                pessoas
              </Text>
              <Text style={PostText}>
                <Text style={[userName, PostText]}>leandro0_vieira </Text>
                <Text>
                  Red Hot Chili Peppers - 10 de Novembro de 2023 - São Paulo
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={containerActionBar}>
          <Image source={require("../../assets/home.png")} style={iconMenu} />
          <Image source={require("../../assets/buscar.png")} style={iconMenu} />
          <Image source={require("../../assets/reels.png")} style={iconMenu} />
          <Image source={require("../../assets/loja.png")} style={iconMenu} />
          <Image
            source={require("../../assets/foto-leandro.jpeg")}
            style={userFeed}
          />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
