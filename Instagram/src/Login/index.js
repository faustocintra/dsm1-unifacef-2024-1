import React from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import styles from "./style";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
  return (
    <LinearGradient start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['#E0F7FA', '#FFEBEE']} 
    style={styles.container}>
      <Image source={require('./assets/instagram-logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário, email ou número de telefone"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </Pressable>
      
        <Pressable style={styles.createAccount}>
        <Text style={styles.buttonTextCreate}>Criar nova conta</Text>
      </Pressable>
      <Image source={require('./assets/meta-logo.png')} style={styles.metaLogo} />
      
      
      
      </LinearGradient>
  );
}
