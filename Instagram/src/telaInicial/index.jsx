import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native"
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { styles } from "./style"
import { Image } from "expo-image"

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"FFF"} translucent={false} />
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo-telaInicial.png")}
          style={styles.logo}
        />
        <View style={styles.icons}>
          <View style={styles.heart}>
            <Feather name="heart" size={24} color="black" />
          </View>
          <View style={styles.messenger}>
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </View>
        </View>
      </View>
      
      <View></View>
    </View>
  )
}
