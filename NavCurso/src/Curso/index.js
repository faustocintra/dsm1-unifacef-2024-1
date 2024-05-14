import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function Curso({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.infoContainer}>
      <Text style={styles.header}>Curso</Text>
      <Image 
            source={require('./img/si.jpeg')}
            style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text style={styles.infoText}>Sistema de Informação</Text>

        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Voltar</Text>
      </Pressable>
      </View>

    </View>
  );
}