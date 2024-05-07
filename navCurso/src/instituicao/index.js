import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const InstituicaoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/Unifacef.jpg')} />
        <Text>Instituicao: Unifacef</Text>
        <Text>Telefone: (16) 3713-4688</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InstituicaoScreen;
