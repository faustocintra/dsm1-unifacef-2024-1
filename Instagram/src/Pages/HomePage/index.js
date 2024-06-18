import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import styles from "./style";
import Header from "../../Components/header";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <View></View>
    </View>
  );
};

export default Home;
