import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './style'

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logocurso.jpeg")} style={styles.logo}/>
      <View>
        <Text style={styles.text}> Engenharia de Software </Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 

// imagem do curso
// nome do curso