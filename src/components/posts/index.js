import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PostItem = ({ user, userImage, postImage, description }) => (
  <View style={styles.container}>
    <View style={styles.userInfo}>
      <Image style={styles.userImage} source={{ uri: userImage }} />
      <Text style={styles.userName}>{user}</Text>
    </View>
    <Image style={styles.postImage} source={{ uri: postImage }} />
    <View style={styles.postContent}>
      <View style={styles.iconContainer}>
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome5 name="comment" size={24} color="black" />
        <Feather name="send" size={24} color="black" />
      </View>
      <Text style={styles.description}>
        <Text style={styles.userName}>{user} </Text>
        <Text style={styles.textNormal}>{description}</Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 384,
  },
  postContent: {
    padding: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 8,
  },
  description: {
    fontWeight: 'bold',
  },
  textNormal: {
    fontWeight: 'normal',
  },
});

export default PostItem;
