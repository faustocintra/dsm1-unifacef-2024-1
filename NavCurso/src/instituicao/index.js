import React from "react"
import { View, Text, Pressable, Image } from "react-native"
import styles  from "./style"

export default function instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo_unifacef_login.png")} 
      style = {{ width: 600, height: 100, borderRadius: 20 }}
      />
      <Text style ={styles.text}> Uni-Facef</Text>
      <Text style= {styles.text}>Tel:</Text>
      <Text style = {styles.text}>(16)3713-4688</Text>
      <Pressable onPress={() =>  navigation.goBack ()} style={styles.button}>
        <Text style = {styles.text}> Voltar </Text>
      </Pressable>
    </View>
  )
}