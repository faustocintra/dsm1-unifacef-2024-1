// index.js

import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.language}>Português (Brasil)</Text>
      <Image
        source={require('./images/logo.png')}
        style={styles.logo} 
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário, email ou número de telefone"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.createAccountButton}>
         <Text style={styles.createAccountButtonText}>Criar nova conta</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.language}>Leandro Heleno</Text>
    </View>
  );
};

export default App;
