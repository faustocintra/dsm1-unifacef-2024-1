import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { View, Image, Text } from "react-native";

const Story = ({ isOwnStory, imageSource, gradientColors, userName }) => {
  const { containerStory, containerStoryAdd, storyAdd, story, gradient } =
    styles;
  return (
    <View style={containerStory}>
      {isOwnStory ? (
        <View style={containerStoryAdd}>
          <Image
            source={require("../../../assets/adicionar.png")}
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
      <Text>{userName}</Text>
    </View>
  );
};

export default Story;
