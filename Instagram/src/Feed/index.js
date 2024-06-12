import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const stories = [
  { id: 1, source: require('./imagens/img-feed1.jpeg'), name: 'Seu Story' },
  { id: 2, source: require('./imagens/img-feed2.jpeg'), name: 'Jorge' },
  { id: 3, source: require('./imagens/img-feed3.jpeg'), name: 'Luiza' },
  { id: 4, source: require('./imagens/img-feed4.jpeg'), name: 'Brenda' },
  { id: 5, source: require('./imagens/img-feed5.jpeg'), name: 'Bruno' },
  { id: 6, source: require('./imagens/img-feed5.jpeg'), name: 'Luis' },
  { id: 7, source: require('./imagens/img-feed5.jpeg'), name: 'Jaqueline' },
];

const feed = [
  { id: 1, source: require('./imagens/img-feed1.jpg'), profile: require('./imagens/img-feed1.jpeg'), name: 'Tiago', phrase: 'Criatividade e beleza!' },
  { id: 2, source: require('./imagens/img-feed2.jpg'), profile: require('./imagens/img-feed2.jpeg'), name: 'Luiz', phrase: 'Viajando!' },
  { id: 3, source: require('./imagens/img-feed3.jpg'), profile: require('./imagens/img-feed3.jpeg'), name: 'Teste', phrase: 'Linda imagem do céu!' },
  { id: 4, source: require('./imagens/img-feed4.jpeg'), profile: require('./imagens/img-feed4.jpeg'), name: 'Brenda', phrase: 'Linda lua!' },
];

const likes = [
  { id: 1, profile: require('./imagens/img-feed1.jpeg'), name: 'Brenda' },
  { id: 2, profile: require('./imagens/img-feed2.jpeg'), name: 'Teresa' },
  { id: 3, profile: require('./imagens/img-feed3.jpeg'), name: 'Jorge' },
  { id: 5, profile: require('./imagens/img-feed4.jpeg'), name: 'Melinda' },
  { id: 6, profile: require('./imagens/img-feed5.jpeg'), name: 'Gilson' },
];

const Feed = () => {
  const navigation = useNavigation();

  const renderStory = ({ item }) => (
    <TouchableOpacity style={styles.story}>
      <Image source={item.source} style={styles.storyImage} />
      <Text style={styles.storyName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.containerPrincipal, { marginTop: 50 }]}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Instagram')}>
            <Image source={require('./imagens/fonte.png')} style={styles.headerImage} />
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" style={styles.icon} />
          </View>
        </View>
        <FlatList
          horizontal
          data={stories}
          renderItem={renderStory}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />
       
        <View style={styles.containerGeral}>
          {feed.map((item, index) => (
            <View key={item.id} style={styles.feedItem}>
              <View style={styles.feedHeader}>
                <Image source={item.profile} style={styles.feedProfileImage} />
                <Text style={styles.feedProfileName}>{item.name}</Text>
              </View>
              <Image source={item.source} style={styles.feedImage} />
              <View style={styles.feedActions}>
                <View style={styles.leftIcons}>
                  <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
                  <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icon} />
                  <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.icon} />
                </View>
                <Ionicons name="bookmark-outline" size={24} color="black" style={styles.icon} />
              </View>
              <View style={styles.feedFollowInfo}>
                <View style={styles.followedByContainer}>
                  <Image source={likes[index % likes.length].profile} style={styles.feedFollowImage} />
                  <Text style={styles.followedByName}>Curtido por </Text>
                  <Text style={styles.boldText}>{likes[index % likes.length].name}</Text>
                  <Text style={styles.followedByName}> e outras </Text>
                  <Text style={styles.boldText}>{Math.floor(Math.random() * 1000)}</Text>
                  <Text style={styles.followedByName}> pessoas</Text>
                </View>
              </View>
              <View style={styles.feedComment}>
                <Text style={styles.feedCommentText}>
                  <Text style={styles.boldText}>{item.name}</Text> {item.phrase}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="add-circle-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="videocam-outline" size={24} color="black" style={styles.icon} />
        <Image source={require('./imagens/img-feed1.jpeg')} style={styles.footerProfileImage} />
      </View>
    </View>
  );
};

export default Feed;