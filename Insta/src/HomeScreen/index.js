// Lib imports
import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// Local imports
import styles from './styles'
import { users, postFeed } from './data'

const HomeScreen = () => {
  const navigation = useNavigation()

  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItem}>
      <Image source={item.source} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.mainWrapper, { marginTop: 50 }]}>
      <ScrollView style={styles.scrollWrapper}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate('Instagram')}>
            <Image source={require('../assets/logo.png')} style={styles.logoImage} />
          </TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Ionicons name="heart-outline" size={20} color="black" style={styles.icon} />
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="black" style={styles.icon} />
          </View>
        </View>
        <FlatList
          horizontal
          data={users}
          renderItem={renderStoryItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyContainer}
        />
       
        <View style={styles.feedWrapper}>
          {postFeed.map((item) => (
            <View key={item.id} style={styles.feedItem}>
              <View style={styles.feedTop}>
                <Image source={item.profile} style={styles.profileImage} />
                <Text style={styles.profileName}>{item.name}</Text>
              </View>
              <Image source={item.source} style={styles.feedImage} />
              <View style={styles.actionIcons}>
                <View style={styles.leftIconGroup}>
                  <Ionicons 
                    name="heart-outline" 
                    size={20} 
                    color="black" 
                    style={styles.icon} />
                  <Ionicons 
                    name="chatbubble-outline" 
                    size={20} 
                    color="black" 
                    style={styles.icon} />
                  <Ionicons 
                    name="paper-plane-outline" 
                    size={20} 
                    color="black" 
                    style={styles.icon} />
                </View>
                <Ionicons 
                  name="bookmark-outline" 
                  size={20} 
                  color="black" 
                  style={styles.icon} />
              </View>
              <View style={styles.commentSection}>
                <Text style={styles.commentText}>
                  <Text style={styles.boldText}>{item.name}</Text> {item.message}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Ionicons 
          name="home-outline" 
          size={20} 
          color="black" 
          style={styles.icon} />
        <Ionicons 
          name="search-outline" 
          size={20} 
          color="black" 
          style={styles.icon} />
        <Ionicons 
          name="add-circle-outline" 
          size={20} 
          color="black" 
          style={styles.icon} />
        <Ionicons 
          name="videocam-outline" 
          size={20} 
          color="black" 
          style={styles.icon} />
        <Image source={require('../assets/story1.jpg')} style={styles.profileThumb} />
      </View>

    </View>
  )
}

export default HomeScreen
