import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

const Home = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      location: "Location 1",
      image: require("../../assets/story1.jpg"),
      likes: 120,
      caption: "Great day!",
      comments: 15,
    },
    {
      id: 2,
      username: "user2",
      location: "Location 2",
      image: require("../../assets/story3.jpg"),
      likes: 200,
      caption: "Enjoying the view.",
      comments: 30,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Topo fixo para histórias */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/story1.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/story2.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/story3.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/story4.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/story5.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      {/* Conteúdo rolável */}
      <ScrollView style={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <View style={styles.postHeader}>
              <Image
                source={require("../../assets/story1.jpg")}
                style={styles.avatar}
                resizeMode="contain"
              />
              <View style={styles.postUserInfo}>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.location}>{post.location}</Text>
              </View>
            </View>
            {/* Substituir por post.image quando houver imagens */}
            <Image
              source={require("../../assets/story2.jpg")}
              style={styles.postImage}
              resizeMode="cover"
            />
            <View style={styles.postFooter}>
              <Text style={styles.likes}>{post.likes} likes</Text>
              <Text style={styles.caption}>
                <Text style={styles.username}>{post.username}</Text> {post.caption}
              </Text>
              <Text style={styles.comments}>View all {post.comments} comments</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Barra de navegação inferior fixa */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="film-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
