import React from 'react'; 
import { FlatList, SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PostItem from "../../components/posts";
import StoryItem from "../../components/stories";

import { POSTS } from "../../utils/data/posts";
import { STORIES } from "../../utils/data/stories";

export default function Home({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    storyContainer: {
      padding: 8,
    },
    postContainer: {
      padding: 8,
    },
    separator: {
      width: 10,
    }
  });

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.storyContainer}>
          <SafeAreaView>
            <FlatList
              data={STORIES}
              horizontal
              renderItem={({ item }) => <StoryItem image={item.image} name={item.name} />}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </SafeAreaView>
        </View>
        <View style={styles.postContainer}>
          {POSTS.map(post => (
            <PostItem
              key={post.id}
              user={post.user}
              userImage={post.userImage}
              postImage={post.postImage}
              description={post.description}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}
