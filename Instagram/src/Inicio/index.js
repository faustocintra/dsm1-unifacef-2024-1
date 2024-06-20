import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";

const images = {
  aviao: require("../../assets/aviao.png"),
  batePapo: require("../../assets/bate-papo.png"),
  balao: require("../../assets/balao-de-fala.png"),
  mais: require("../../assets/mais.png"),
  video: require("../../assets/video.png"),
  coracao: require("../../assets/coracao.png"),
  casa: require("../../assets/casa.png"),
  lupa: require("../../assets/lupa.png"),
  instagramLogo: require("../../assets/Instagram-Logo.png"),
  bandeira: require("../../assets/bandeira.png"),
  tresPontos: require("../../assets/tres-pontos.png"),
  transparente: require("../../assets/transparente.png"),
  zeleo: require("../../assets/zéleo.jpg"),
  leticia: require("../../assets/leticia.jpg"),
  rafael: require("../../assets/rafael.jpg"),
  bizzi: require("../../assets/bizzi.jpg"),
  foto1: require("../../assets/foto1.jpg"),
  foto2: require("../../assets/foto2.jpg"),
  
};

const publicacoes = [
  {
    id: 1,
    username: "lucas.bizzi",
    userImage: images.bizzi,
    publicationImage: images.foto1,
    likedBy: "leticiafc106",
    likedByImage: images.leticia,
    likesCount: 1950,
  },
  {
    id: 2,
    username: "leticiafc106",
    userImage: images.leticia,
    publicationImage: images.foto2,
    likedBy: "lucas.bizzi",
    likedByImage: images.bizzi,
    likesCount: 1894,
  },
];

export default function Inicio() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image source={images.instagramLogo} style={styles.headerLogo} />
          <View style={styles.headerIcons}>
            <Image source={images.coracao} style={styles.headerIcon} />
            <Image source={images.batePapo} style={styles.headerIcon} />
          </View>
        </View>
        <View style={styles.storyContainer}>
          <View style={styles.story}>
            <Image source={images.bizzi} style={styles.storyImage} />
            <Text style={styles.storyText}>Seu story</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.leticia} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>leticiafc106</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.zeleo} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>gzaninelo</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.rafael} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>rafatomazinho</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {publicacoes.map((post) => (
            <View key={post.id} style={styles.publicationContainer}>
              <View style={styles.publicationHeader}>
                <Image source={post.userImage} style={styles.publicationIcon} />
                <Text style={styles.publicationUsername}>{post.username}</Text>
                <View style={styles.publicationThreeDotsContainer}>
                  <Image source={images.tresPontos} style={styles.publicationThreeDots} />
                </View>
              </View>
              <Image source={post.publicationImage} style={styles.publicationImage} />
              <View style={styles.publicationActions}>
                <Image source={images.coracao} style={styles.publicationActionIcon} />
                <Image source={images.balao} style={styles.publicationActionIcon} />
                <Image source={images.aviao} style={styles.publicationActionIcon} />
                <Image source={images.bandeira} style={styles.publicationFlag} />
              </View>
              <View style={styles.likeContainer}>
                <Image source={post.likedByImage} style={styles.likeImage} />
                <Text style={styles.likeText}>Liked by {post.likedBy} and {post.likesCount} other people </Text>
              </View>
              
              <Image source={images.transparente} style={styles.whiteSeparator} />
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Image source={images.casa} style={styles.footerIcon} />
        <Image source={images.lupa} style={styles.footerIcon} />
        <Image source={images.mais} style={styles.footerIcon} />
        <Image source={images.video} style={styles.footerIcon} />
        <View style={styles.profileContainer}>
          <Image source={images.roberto} style={styles.profileIcon} />
        </View>
      </View>
    </View>
  );
}
