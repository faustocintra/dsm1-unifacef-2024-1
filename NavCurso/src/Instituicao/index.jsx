import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <img src={"https://ava-grad.unifacef.com.br/pluginfile.php/1/core_admin/logocompact/300x300/1707216088/logo_unifacef_login.png"} alt="Descrição da imagem"/>
      <Text style={styles.titulo}>Unifacef</Text>
      <Text>Telefone:  (16) 3713-4688</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 