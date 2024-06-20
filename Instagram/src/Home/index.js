import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styles from './styles'
import { Text, View, Image } from "react-native";

const HomePage = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/instagram-text-icon.png")} style={styles.logoHeader} />
        <View style={styles.headerNav}>
          <Image source={require("../../assets/curtida-icone.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/direct-icone.png")} style={styles.iconMenu} />
        </View>
      </View>

      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image source={require("../../assets/icone-mais.png")} style={styles.storyAdd} />
          </View>
          <Image source={require("../../assets/profile.jpeg")} style={styles.story} />
          <Text>Your story</Text>
        </View>

        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/profile.jpeg")} style={styles.story} />
          <Text>bolsonaro</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/profile.jpeg")} style={styles.story} />
          <Text>tarcisio_sp</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58528", "#DD2A7D", "#8134AJ"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/profile.jpeg")} style={styles.story} />
          <Text>pablomarcal</Text>
        </View>
      </View>

      <View>

        <View style={styles.containerFeedHeader}>
          <View style={styles.userContainer}>
            <Image source={require("../../assets/profile.jpeg")} style={styles.userFeed} />
            <Text style={styles.userName}>pedropaulino1</Text>
          </View>
          <Image source={require("../../assets/more.png")} style={styles.more} />
        </View>

        <Image source={require("../../assets/profile.jpeg")} style={styles.feed} />

        <View style={styles.containerFeedFooter}>
          <View style={styles.FooterAction}>
            <Image source={require("../../assets/curtida-icone.png")} style={styles.iconMenu} />
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
            Liked by <Text style={[styles.userName, styles.PostText]}>bolsonaro </Text>
            and others
          </Text>
          <Text style={styles.PostText}>
            <Text style={[styles.userName, styles.PostText]}>pedropaulino</Text>
            <Text> Subtitle of the profile picture and blablabla tmj </Text>
          </Text>
        </View>

        <View style={styles.containerActionBar}>
          <Image source={require("../../assets/action_home.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/action_search.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/action_reels.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/action_store.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/profile.jpeg")} style={styles.userFeed} />
        </View>
      </View>
    </View>
  );
}

export default HomePage