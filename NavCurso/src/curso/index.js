import React from 'react'
import { View, Text, Pressable, Image } from "react-native"
import styles from './style'

export default function curso({ navigation }) {
  return (
    <View style={styles.container}>
         <Image
        source={require("../../assets/engenharia de software.jpeg")}
        style={{ width: 100, height: 100, borderRadius: 20 }}
      />
      <Text style={styles.text}> Engenharia de Software </Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}> Voltar </Text>
      </Pressable>
    </View>
  )
}