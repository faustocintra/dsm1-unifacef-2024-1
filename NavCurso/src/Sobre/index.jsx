import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './style'

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/profile.jpeg")} style={styles.logo}/>
      <Text>Sobre Mim</Text>
      <View>
        <Text> nome do alun: Ian Augusto </Text>
        <Text> telefone: (16) 98215-5510 </Text>
        <Text> e-mail: ian.prog.br@gmail.com </Text>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 

// nome 
// telefone 
// e-mail