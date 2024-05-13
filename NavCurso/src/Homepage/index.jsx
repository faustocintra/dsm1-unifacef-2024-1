import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './style'

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Página inicial</Text>
      <Button 
        title="Sobre mim"
        onPress={() => navigation.navigate('SobreMim')}
      />
      <Button 
        title="Curso"
        onPress={() => navigation.navigate('Curso')}
      />
      <Button 
        title="Instituição"
        onPress={() => navigation.navigate('Instituição')}
      />
    </View>
  )
} 