import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Home = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home!</Text>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Ir para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
