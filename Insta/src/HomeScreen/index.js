// Lib imports
import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// Local imports
import styles from './styles'

const data =  require('./data.js')

const HomeScreen = () => {
  const navigation = useNavigation()

  // Função para renderização dos itens da story
  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItem}>
      <Image source={item.source} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.mainWrapper, { marginTop: 50 }]}>
      <ScrollView style={styles.scrollWrapper}>

        {/* Top Bar, onde fica o icone do instagram e dos chats */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={require('../assets/logo.png')} style={styles.logoImage} />
          </TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Ionicons name="chatbubble-outline" size={30} color="black" style={styles.icon} />
          </View>
        </View>

        {/* Onde são renderizadas as stories, utilizando do import data.js */}
        <FlatList
          horizontal
          data={data.users}
          renderItem={renderStoryItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyContainer}
        />

        {/* Aqui mapeamos todos os posts do data.js para formarem um layout do post */}
        <View style={styles.feedWrapper}>
          {data.posts.map((item) => (
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

      {/* Aqui ficam os icones na barra abaixo */}
      <View style={styles.bottomNav}>
        <Ionicons 
          name="home" 
          size={30} 
          color="black" 
          style={styles.icon} />
        <Ionicons 
          name="search" 
          size={30} 
          color="black" 
          style={styles.icon} />
        <Ionicons 
          name="add-circle" 
          size={30} 
          color="black" 
          style={styles.icon} />

        <Image source={require('../assets/pfp1.png')} style={styles.profileThumb} />
      </View>

    </View>
  )
}

export default HomeScreen
