import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { Image } from "expo-image"
import { Entypo } from "@expo/vector-icons"
import { TabActions } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons"
// import storys from "../database/storys"
// import Storys from "../components/storys"
// import Post from "../components/posts"
import { header } from "./style"


export default Header = () => {
  return (
    <View style={header.header}>
      <Image source={require("../../../assets/logos/logo-telaInicial.png")} style={header.logo} />
      <View style={header.icons}>
        <View style={header.heart}>
          <Feather name="heart" size={24} color="black" />
        </View>
        <View style={header.messenger}>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}
