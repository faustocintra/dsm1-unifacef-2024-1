import React from "react";
import { View, Image, ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLogo: {
    width: 80,
    height: 42,
    resizeMode: 'contain'
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  story: {
    alignItems: 'center',
    marginRight: 10
  },
  storyImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginTop: 5
  },
  storyText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    textAlign: 'center'
  },
  storyImageWithAura: {
    width: 42,
    height: 42,
    borderRadius: 21
  },
  storyWithAura: {
    width: 48,
    height: 48,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF'
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
  footerIcon: {
    width: 30,
    height: 30
  },
  profileContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 5
  },
  profileIcon: {
    width: '100%',
    height: '100%'
  },
  publicationContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  publicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  publicationIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  publicationUsername: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  publicationThreeDotsContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  publicationThreeDots: {
    width: 20,
    height: 20
  },
  publicationImage: {
    width: windowWidth - 40,
    height: (windowWidth - 40) * 0.8,
    maxWidth: 550,
    borderRadius: 10,
    marginTop: 10
  },
  publicationActions: {
    flexDirection: 'row',
    marginTop: 10
  },
  publicationActionIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  publicationFlag: {
    width: 30,
    height: 30,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  likeImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5
  },
  likeText: {
    fontSize: 14
  },
  whiteSeparator: {
    width: '100%',
    height: 10,
    backgroundColor: '#FFFFFF'
  }
});

const images = {
  plane: require("../../assets/aviao.png"),
  chat: require("../../assets/bate-papo.png"),
  balloon: require("../../assets/balao-de-fala.png"),
  plus: require("../../assets/mais.png"),
  video: require("../../assets/video.png"),
  heart: require("../../assets/coracao.png"),
  home: require("../../assets/casa.png"),
  search: require("../../assets/lupa.png"),
  instagramLogo: require("../../assets/Instagram-Logo.png"),
  gabriel: require("../../assets/gabriel.jpeg"),
  igor3k: require("../../assets/igor3k.jpeg"),
  travis: require("../../assets/travis.jpeg"),
  petrolhead: require("../../assets/petrolhead.jpeg"),
  neymar: require("../../assets/neymar.jpeg"),
  slam: require("../../assets/slam.jpeg"),
  flag: require("../../assets/bandeira.png"),
  threeDots: require("../../assets/tres-pontos.png"),
  transparent: require("../../assets/transparente.png"),
  ph: require("../../assets/petrolhead.jpeg")
};

const posts = [
  {
    id: 1,
    username: "gabrieleme.05",
    userImage: images.gabriel,
    publicationImage: images.slam,
    likedBy: "Igor3K",
    likedByImage: images.igor3k,
    likesCount: 2500
  },
  {
    id: 2,
    username: "petrolhead",
    userImage: images.petrolhead,
    publicationImage: images.ph,
    likedBy: "cactusjack",
    likedByImage: images.travis,
    likesCount: 697
  }
];

export default function Inicio() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image source={images.instagramLogo} style={styles.headerLogo} />
          <View style={styles.headerIcons}>
            <Image source={images.heart} style={styles.headerIcon} />
            <Image source={images.chat} style={styles.headerIcon} />
          </View>
        </View>
        <View style={styles.storyContainer}>
          <View style={styles.story}>
            <Image source={images.gabriel} style={styles.storyImage} />
            <Text style={styles.storyText}>Seu story</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.igor3k} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>Igor3K</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.neymar} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>neymarjr</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.travis} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>cactusjack</Text>
          </View>
          <View style={styles.story}>
            <LinearGradient colors={['#FFA500', '#FF1493']} style={styles.storyWithAura}>
              <Image source={images.petrolhead} style={styles.storyImageWithAura} />
            </LinearGradient>
            <Text style={styles.storyText}>petrolhead</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {posts.map((post) => (
            <View key={post.id} style={styles.publicationContainer}>
              <View style={styles.publicationHeader}>
                <Image source={post.userImage} style={styles.publicationIcon} />
                <Text style={styles.publicationUsername}>{post.username}</Text>
                <View style={styles.publicationThreeDotsContainer}>
                  <Image source={images.threeDots} style={styles.publicationThreeDots} />
                </View>
              </View>
              <Image source={post.publicationImage} style={styles.publicationImage} />
              <View style={styles.publicationActions}>
                <Image source={images.heart} style={styles.publicationActionIcon} />
                <Image source={images.balloon} style={styles.publicationActionIcon} />
                <Image source={images.plane} style={styles.publicationActionIcon} />
                <Image source={images.flag} style={styles.publicationFlag} />
              </View>
              <View style={styles.likeContainer}>
                <Image source={post.likedByImage} style={styles.likeImage} />
                <Text
 style={styles.likeText}>Curtido por {post.likedBy} e outras {post.likesCount} pessoas</Text>
 </View>
 <View style={styles.whiteSeparator} />
</View>
))}
</View>
</ScrollView>

<View style={styles.footer}>
<Image source={images.home} style={styles.footerIcon} />
<Image source={images.search} style={styles.footerIcon} />
<Image source={images.plus} style={styles.footerIcon} />
<Image source={images.video} style={styles.footerIcon} />
<View style={styles.profileContainer}>
<Image source={images.gabriel} style={styles.profileIcon} />
</View>
</View>
</View>
);
}
