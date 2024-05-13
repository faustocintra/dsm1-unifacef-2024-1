import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default function Instituicao() {
    return (
      <View style={styles.container}>
        <Image
          source={require('https://imgur.com/ctOIUnF')}
          style={styles.image}
        />
        <Text style={styles.text}>Unifacef</Text>
        <Text style={styles.text}>Telefone: XXXXXXXX</Text>
        <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
      </View>
    );
  }