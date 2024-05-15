import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './style'
import unifacef from "../../assets/Unifacef.jpg"

export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <View> 
        <Image source={unifacef} style={styles.logoImage} />
      </View>

      <View style={styles.info}>
        <Text style={styles.text}> Uni-FACEF </Text>
        <Text style={styles.text}> Para mais informações ligue para o telefone: </Text>
        <Text style={styles.text}> (16) 3713-4688 </Text>
      </View>

      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 
