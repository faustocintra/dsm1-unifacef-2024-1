import React from "react";
import { View, ScrollView, SafeAreaView, FlatList } from "react-native";
import styles from "./style";
import Header from "../../Components/header";
import Story from "../../Components/storys";
import Posts from "../../Components/posts";
import Appbar from "../../Components/Appbar";

import { STORY } from "../../utils/data/story";
import { POSTS } from "../../utils/data/post";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.story}>
          <SafeAreaView>
            <FlatList
              data={STORY}
              horizontal
              renderItem={({ item }) => (
                <Story image={item.image} name={item.name} />
              )}
            />
          </SafeAreaView>
        </View>
        <View style={styles.post}>
          {POSTS.map((post) => (
            <Posts
              key={post.id}
              name={post.name}
              perfil={post.perfil}
              post={post.post}
              descricao={post.descricao}
            />
          ))}
        </View>
      </ScrollView>
      <Appbar />
    </View>
  );
};

export default Home;
