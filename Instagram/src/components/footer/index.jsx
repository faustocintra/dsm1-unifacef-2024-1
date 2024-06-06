import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { Image } from "expo-image"
import { Entypo } from "@expo/vector-icons"
import { TabActions } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons"
import storys from "../../../src/database/storys"
import style from "./style"

export default Footer = () => {
  return (
    <View style={style.viewFooter}>
      <Entypo name="home" size={24} color="black" />
      <AntDesign name="search1" size={24} color="black" />
      <Feather name="plus-square" size={24} color="black" />
      <Image source={require("../../../assets/logos/logo-reels.png")} style={{ width: 24, height: 24 }} />
      <Image source={storys[0].image} style={{ width: 24, height: 24, borderRadius: 50 }} />
    </View>
  )
}