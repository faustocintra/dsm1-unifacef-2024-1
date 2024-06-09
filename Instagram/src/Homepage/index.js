import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./style";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Feather,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Homepage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('./assets/Instagram-fonte.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.headerRight}>
          <AntDesign
            name="heart"
            size={19}
            color="black"
            style={styles.likePost}
          />
          <FontAwesome6 name="facebook-messenger" size={19} color="black" style={styles.likePost}/>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.stories}
      >

        <View style={styles.storyCirculo}>
          <Image
            source={require("./assets/foto-perfil.jpg")}
            style={styles.storyImage}
          />
          <Text style={styles.storyText}>Seu story</Text>
        </View>

        <View alignItems={'center'}>
        <LinearGradient
          colors={["#F58529", "#DD2A7B", "#8134AF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.storyCirculo}>
            <Image
              source={require("./assets/facef.png")}
              style={styles.storyImage}
            />
          </View>
        </LinearGradient>
        <Text style={styles.storyText}>unifacef</Text>
        </View>

        <View alignItems={'center'}>
        <LinearGradient
          colors={["#F58529", "#DD2A7B", "#8134AF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.storyCirculo}>
            <Image
              source={require("./assets/jorgemateus.jpg")}
              style={styles.storyImage}
            />
          </View>
        </LinearGradient>
        <Text style={styles.storyText}>jorgemateus</Text>
        </View>

        <View alignItems={'center'}>
        <LinearGradient
          colors={["#F58529", "#DD2A7B", "#8134AF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.storyCirculo}>
            <Image
              source={require("./assets/panificadora.jpg")}
              style={styles.storyImage}
            />
          </View>
        </LinearGradient>
        <Text style={styles.storyText}>panificadorapires</Text>
        </View>

        <View alignItems={'center'}>
        <LinearGradient
          colors={["#F58529", "#DD2A7B", "#8134AF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.storyCirculo}>
            <Image
              source={require("./assets/panificadora.jpg")}
              style={styles.storyImage}
            />
          </View>
        </LinearGradient>
        <Text style={styles.storyText}>panificadorapires</Text>
        </View>

      </ScrollView>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image
            source={require("./assets/n4tatoo.jpg")}
            style={styles.postProfileImage}
          />
          <Text style={styles.postUsername}>n4_tattoo</Text>
        </View>
        <Image
          source={require("./assets/post-tatuagem.jpg")}
          style={styles.postImage}
        />
        <View style={styles.iconPost}>
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Feather name="send" size={24} color="black" style={styles.icon} />
          <Feather
            name="bookmark"
            size={24}
            color="black"
            style={styles.iconBook}
          />
        </View>

        <View style={styles.likePost}>
          <Text>curtido por carol_neias e outras pessoas</Text>
          <Text style={styles.textBold}>
            n4_tatoo Mais uma cliente satisfeita ✨
          </Text>
        </View>

        <View style={styles.footer}>
          <FontAwesome6
            name="house"
            size={26}
            color="black"
            style={styles.icon}
          />
          <Feather name="search" size={26} color="black" style={styles.icon} />
          <Feather
            name="plus-square"
            size={26}
            color="black"
            style={styles.icon}
          />
          <Octicons name="video" size={26} color="black" style={styles.icon} />
          <Ionicons
            name="person-circle-outline"
            size={26}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
    </ScrollView>
  );
}
