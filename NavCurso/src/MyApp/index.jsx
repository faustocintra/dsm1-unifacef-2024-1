import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './style'

export default function MyApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Meu App</Text>
      <Button 
        title="Sobre Mim"
        onPress={() => navigation.navigate('SobreMim')}

      />
      <Button 
        title="Curso"
        onPress={() => navigation.navigate('Curso')}

      />
      <Button 
        title="Instituição"
        onPress={() => navigation.navigate('Instituicao')}

      />
    </View>
  )
} 