import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { header, story } from "./style"
import { Image } from "expo-image"
import { Entypo } from "@expo/vector-icons"
import { TabActions } from "@react-navigation/native"
import Storys from "../components/storys"

export default function TelaInicial({ navigation }) {
  return (
    <View style={header.container}>
      <StatusBar backgroundColor={"FFF"} translucent={false} />
      <View style={header.header}>
        <Image source={require("../../assets/logos/logo-telaInicial.png")} style={header.logo} />
        <View style={header.icons}>
          <View style={header.heart}>
            <Feather name="heart" size={24} color="black" />
          </View>
          <View style={header.messenger}>
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </View>
        </View>
      </View>
      <Storys />
    </View>
  )
}
