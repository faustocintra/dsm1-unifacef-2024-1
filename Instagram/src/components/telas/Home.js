import React from 'react';
import { View, Text, StatusBar, ScrollView, Image, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../telasComponents/Stories';
import Post from '../telasComponents/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/name.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Ionic name="heart-outline" style={styles.icon} />
          <Ionic name="chatbubble-ellipses-outline" style={styles.icon} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Post />
        <View style={styles.centered}>
          <Ionic
            name="refresh-circle-outline"
            style={styles.reloadIcon}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 110,
    height: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginLeft: 10, 
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  reloadIcon: {
    fontSize: 60,
    opacity: 0.2,
  },
});

export default Home;
