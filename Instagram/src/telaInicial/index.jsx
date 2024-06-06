import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { header, story } from "../components/header/style"
import { Image } from "expo-image"
import { Entypo } from "@expo/vector-icons"
import { TabActions } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons"
import storys from "../database/storys"
import Storys from "../components/storys"
import Post from "../components/posts"
import Header from "../components/header"

export default function TelaInicial({ navigation }) {
  return (
    <View style={header.container}>
      <StatusBar backgroundColor={"FFF"} translucent={false} />
     <Header/>
      <ScrollView>
        <Storys />
        <Post />
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent:"space-between", width:"100%",marginHorizontal: "auto", padding:15, borderTopWidth: 0.2, borderColor:"grey", alignItems: "center"}}>
        <Entypo name="home" size={24} color="black" />
        <AntDesign name="search1" size={24} color="black" />
        <Feather name="plus-square" size={24} color="black" />
        <Image source={require("../../assets/logos/logo-reels.png")} style={{ width: 24, height: 24 }} />
        <Image source={storys[0].image} style={{ width: 24, height: 24, borderRadius: 50}} />
      </View>
    </View>
  )
}
