import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
         <Image
        source={require('./assets/joia.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.titulo}>Nome: Nicolas</Text>
      <Text style={styles.titulo}>Telefone: 016 993871693</Text>
      <Text style={styles.titulo}>Email: nicolastch04@gmail.com</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 