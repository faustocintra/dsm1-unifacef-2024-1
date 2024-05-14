import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './style'

export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/facef.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.titulo}>Unifacef</Text>
      <Text>Telefone:  (16) 3713-4688</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
}
