import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Instituicao = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instituição</Text>

      {/* Imagem da insituição */}
      <Image
          source={require('../../assets/Uni_FACEF_MUNICIPAL.png')}
          style={styles.instituicaoImage} 
      />

      {/* Informações da instituição */}
      <Text style={styles.info}>Uni-FACEF</Text>
      <Text style={styles.info}>Centro Universitário Municipal de Franca</Text>
      <Text style={styles.info}>Telefone: (16) 3713-4688</Text>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Instituicao

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5', 
  },
  title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
  },
  instituicaoImage: {
    width: 270,
    height: 60,
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    width: '20%',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20, 
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})