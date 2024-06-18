import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import BottomBar from './components/BottomBar'
import Post from './components/Post'

const HomeScreen = ({ navigation }) => {
  const stories = [
    { id: 'story-0', type: 'story', source: require('../assets/my-profile.jpeg'), name: 'Seu story' }, 
    { id: 'story-1', type: 'story', source: require('../assets/story2.jpeg'), name: 'gabrieleme.05' },
    { id: 'story-2', type: 'story', source: require('../assets/story3.jpeg'), name: 'papacideroroberto' },
    { id: 'story-3', type: 'story', source: require('../assets/images.png'), name: 'unifacef' },
  ];

  const posts = [
    {
      id: 'post-1',
      type: 'post',
      profileImage: require('../assets/my-profile.jpeg'),
      profileName: 'icaro.oliveiira_',
      postImage: require('../assets/post1.jpeg'),
      likes: 1000,
      description: 'DENTRO DA HILUX',
    },
    {
      id: 'post-2',
      type: 'post',
      profileImage: require('../assets/story3.jpeg'),
      profileName: 'papacideroroberto',
      postImage: require('../assets/post2.jpg'), 
      likes: 2000,
      description: 'CORVETTE',
    },
    {
      id: 'post-3',
      type: 'post',
      profileImage: require('../assets/story3.jpeg'),
      profileName: 'papacideroroberto',
      postImage: require('../assets/post3.jpeg'), 
      likes: 400,
      description: 'HETEROTOP',
    },
  ]

  const data = [
    { id: 'header', type: 'header' },
    { id: 'stories', type: 'stories', stories },
    ...posts,
  ]

  const renderStoryItem = ({ item }) => {
    if (item.id === 'story-0') {
      return (
        <TouchableOpacity style={styles.story}>
          <View style={styles.myStory}>
            <Image source={item.source} style={styles.myStoryImage} />
            <View style={styles.addIconContainer}>
              <AntDesign name="pluscircle" size={18} color="#0095f6" />
            </View>
          </View>
          <Text style={styles.storyText} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.story}>
          <LinearGradient
            colors={['#8a3ab9', '#fbad50']}
            style={styles.storyGradient}
          >
            <View style={styles.storyImageContainer}>
              <Image source={item.source} style={styles.storyImage} />
            </View>
          </LinearGradient>
          <Text style={styles.storyText} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        </TouchableOpacity>
      )
    }
  }

  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return (
        <View style={styles.header}>
          <Image
            source={require('../assets/Instagram-Logo-removebg-preview.png')}
            style={styles.logo}
          />
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <AntDesign name="hearto" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
              <FontAwesome name="send-o" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    } else if (item.type === 'stories') {
      return (
        <FlatList
          data={item.stories}
          renderItem={renderStoryItem}
          keyExtractor={story => story.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />
      )
    } else if (item.type === 'post') {
      return <Post post={item} />
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
      />
      <BottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  storiesContainer: {
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    width: 80,
    marginHorizontal: 5, 
  },
  storyGradient: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImageContainer: {
    width: 64, 
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  myStoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  myStory: {
    position: 'relative',
    alignItems: 'center',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    maxWidth: 70,
  },
  flatListContentContainer: {
    paddingBottom: 60,
  },
})

export default HomeScreen