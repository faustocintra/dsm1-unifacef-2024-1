import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

export default function MeuApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Meu APP</Text>
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
