import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.info}>Nome: Seu Nome</Text>
      <Text style={styles.info}>Telefone: Seu Telefone</Text>
      <Text style={styles.info}>Email: Seu Email</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  );
}