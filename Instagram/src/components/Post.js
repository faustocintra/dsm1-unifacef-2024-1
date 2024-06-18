import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons'

const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={post.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{post.profileName}</Text>
      </View>
      <Image source={post.postImage} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.postActions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="comment-o" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveIcon}>
            <Feather name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{post.likes} curtidas</Text>
        <Text style={styles.postDescription}>
          <Text style={styles.profileName}>{post.profileName} </Text>
          {post.description}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postFooter: {
    padding: 10,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  saveIcon: {
    marginLeft: 'auto',
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default Post