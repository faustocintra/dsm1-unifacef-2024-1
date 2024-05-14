import React from "react"
import { View, Text, Pressable } from "react-native"
import { styles } from "./style"

export default function homepage({ navigation }) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.header}>Meu App</Text>
      <Pressable
        title="Sobre mim"
        onPress={() => navigation.navigate("sobre")}
        style={styles.button}
      >
        <Text style={styles.text}>Sobre mim</Text>
      </Pressable>
      
      <Pressable
        title="Curso"
        onPress={() => navigation.navigate("curso")}
        style={styles.button}
      >
        <Text style={styles.text}>Curso</Text>
      </Pressable>
      <Pressable
        title="Instituição"
        onPress={() => navigation.navigate("instituicao")}
        style={styles.button}
      >
        <Text style={styles.text}>Instituição</Text>
      </Pressable>
    </View>
  )
}