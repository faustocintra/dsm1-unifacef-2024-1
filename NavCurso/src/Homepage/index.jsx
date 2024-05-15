import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './style'

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página inicial</Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para aba Curso"
          onPress={() => navigation.navigate('Curso')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para aba Instituição"
          onPress={() => navigation.navigate('Instituicao')}
        />
      </View>
      <View style={styles.buttonContainer}>
          <Button 
          title="Ir para aba Sobre Mim"
          onPress={() => navigation.navigate('Sobre')}
        />
      </View>
    </View>
  )
} 

