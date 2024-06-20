import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// Dados para histórias
const stories = [
  { id: 1, source: require('./images/story1.jpg'), name: 'Seu Story' },
  { id: 2, source: require('./images/story2.jpg'), name: 'Chef Paula' },
  { id: 3, source: require('./images/story3.jpg'), name: 'WorkaHolic' },
  { id: 4, source: require('./images/story4.jpg'), name: 'Larissa' },
  { id: 5, source: require('./images/story5.jpg'), name: 'DOGuinho' },
  { id: 6, source: require('./images/story6.jpg'), name: 'Camila' },
  { id: 7, source: require('./images/story7.jpg'), name: 'Beatriz' },
];

// Dados para o feed
const feed = [
  { id: 1, source: require('./images/feed1.jpg'), profile: require('./images/story6.jpg'), name: 'Camila', phrase: 'Apreciando a beleza da vida!' },
  { id: 2, source: require('./images/feed2.jpg'), profile: require('./images/story2.jpg'), name: 'Chef Paula', phrase: 'Um banquete à mesa!' },
  { id: 3, source: require('./images/feed3.jpg'), profile: require('./images/story3.jpg'), name: 'WorkaHolic', phrase: 'Só um café para acordar!' },
  { id: 4, source: require('./images/feed4.jpg'), profile: require('./images/story4.jpg'), name: 'Larissa', phrase: 'Dança clássica!' },
];

// Dados para os likes
const likes = [
  { id: 1, profile: require('./images/story2.jpg'), name: 'Chef Paula' },
  { id: 2, profile: require('./images/story5.jpg'), name: 'DOGuinho' },
  { id: 3, profile: require('./images/story7.jpg'), name: 'Beatriz' },
  { id: 5, profile: require('./images/story3.jpg'), name: 'WorkaHolic' },
  { id: 6, profile: require('./images/story6.jpg'), name: 'Camila' },
];

// Componente para renderizar uma história individual
const StoryItem = ({ item }) => (
  <TouchableOpacity style={styles.story}>
    <Image source={item.source} style={styles.storyImage} />
    <Text style={styles.storyName}>{item.name}</Text>
  </TouchableOpacity>
);

//  item do feed
const FeedItem = ({ item, index }) => {
  const likeData = likes[index % likes.length];
  return (
    <View style={styles.feedItem}>
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
          <Image source={likeData.profile} style={styles.feedFollowImage} />
          <Text style={styles.followedByName}>Curtido por </Text>
          <Text style={styles.boldText}>{likeData.name}</Text>
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
  );
};

// Componente principal
const Detalhes = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainContainer, { marginTop: 50 }]}>
      <ScrollView style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Instagram')}>
            <Image source={require('./images/fonte.png')} style={styles.headerImage} />
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" style={styles.icon} />
          </View>
        </View>

        {/*  storys */}
        <FlatList
          horizontal
          data={stories}
          renderItem={({ item }) => <StoryItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />

        {/* feed */}
        <View style={styles.feedContainer}>
          {feed.map((item, index) => (
            <FeedItem key={item.id} item={item} index={index} />
          ))}
        </View>
      </ScrollView>

      {/* rodapé */}
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="add-circle-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="videocam-outline" size={24} color="black" style={styles.icon} />
        <Image source={require('./images/story1.jpg')} style={styles.footerProfileImage} />
      </View>
    </View>
  );
};

export default Detalhes;
