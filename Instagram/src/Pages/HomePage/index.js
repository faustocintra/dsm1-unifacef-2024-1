import React from "react";
import { View, ScrollView, SafeAreaView, FlatList } from "react-native";
import styles from "./style";
import Header from "../../Components/header";
import Story from "../../Components/storys";
import { STORY } from "../../utils/data/story";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View>
          <SafeAreaView>
            {/* Storys */}
            <FlatList
              data={STORY}
              horizontal
              renderItem={({ item }) => (
                <Story image={item.image} name={item.name} />
              )}
            />
          </SafeAreaView>
          <View>{/* Post */}</View>
        </View>
      </ScrollView>
      {/* <Footer/> */}
    </View>
  );
};

export default Home;
