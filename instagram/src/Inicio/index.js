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
  roberto: require("../../assets/roberto.jpeg"),
  isabelli: require("../../assets/isabelli.jpeg"),
  thales: require("../../assets/thales.jpeg"),
  aleatorio: require("../../assets/aleatorio.jpeg"),
  bittar: require("../../assets/bittar.jpeg"),
  carro: require("../../assets/carro.jpeg"),
  bandeira: require("../../assets/bandeira.png"),
  tresPontos: require("../../assets/tres-pontos.png"),
  transparente: require("../../assets/transparente.png"),
  bebida: require("../../assets/bebida.jpeg"),
};

const publicacoes = [
  {
    id: 1,
    username: "papacideroroberto",
    userImage: images.roberto,
    publicationImage: images.carro,
    likedBy: "Isabelli",
    likedByImage: images.isabelli,
    likesCount: 1654,
  },
  {
    id: 2,
    username: "bluzera",
    userImage: images.aleatorio,
    publicationImage: images.bebida,
    likedBy: "Thales",
    likedByImage: images.thales,
    likesCount: 987,
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
            <Image source={images.roberto} style={styles.storyImage} />
            <Text style={styles.storyText}>Seu story</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.isabelli} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>Isabelli</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.bittar} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>Bittar</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.thales} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>Thales</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.aleatorio} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>Bluzera</Text>
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
                <Text style={styles.likeText}>Curtido por {post.likedBy} e outras {post.likesCount} pessoas</Text>
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
