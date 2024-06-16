import React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const Story = ({ isOwnStory, imageSource, gradientColors }) => {
  const { containerStory, containerStoryAdd, storyAdd, story, gradient } =
    styles;
  return (
    <View style={containerStory}>
      {isOwnStory ? (
        <View style={containerStoryAdd}>
          <Image
            source={require("../../assets/adicionar.png")}
            style={storyAdd}
          />
        </View>
      ) : (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0.8 }}
          end={{ x: 0.4, y: 0 }}
          style={gradient}
        />
      )}
      <Image source={imageSource} style={story} />
      <Text>Seu story</Text>
    </View>
  );
};

const HomePage = () => {
  const {
    container,
    header,
    logoHeader,
    headerNav,
    iconMenu,
    containerStories,
  } = styles;

  // Dados dos stories
  const stories = [
    {
      isOwnStory: true,
      imageSource: require("../../assets/foto-leandro.jpeg"),
      gradientColors: [],
    },
    {
      isOwnStory: false,
      imageSource: require("../../assets/corinthians.jpg"),
      gradientColors: ["#F58529", "#DD2A7B", "#8134AF"],
    },
    {
      isOwnStory: false,
      imageSource: require("../../assets/corinthians.jpg"),
      gradientColors: ["#F58529", "#DD2A7B", "#8134AF"],
    },
  ];

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
          />
        ))}
      </View>
    </View>
  );
};

export default HomePage;
