import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <img src={"./engenharia_img.png"} alt="Descrição da imagem"/>
      <Text style={styles.titulo}>Engenharia</Text>
      
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 