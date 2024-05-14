import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
         <Image
        source={require('./assets/sistema-de-info.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.titulo}>Sistema de Informação</Text>
      
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 