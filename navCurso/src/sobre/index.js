import React from 'react';
import { View, Text, TouchableOpacity ,Image } from 'react-native';
import styles from './styles';

const Sobre = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Mim</Text>
        <Image source={require('../../assets/usuario.png')} />
        <Text>Nome: Luiz Mario Faleiros</Text>
        <Text>Telefone: (16) 99999-9999</Text>
        <Text>Email: luiz@unifacef.com.br</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Sobre;
