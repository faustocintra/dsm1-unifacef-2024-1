import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones do Expo
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={['#FF9B70', '#FFD270', '#FFD270']}
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.language}>Português (Brasil)</Text>
          <View style={styles.logoContainer}>
            <View style={styles.logo} />
          </View>
          <TextInput 
            style={styles.input} 
            placeholder="Nome de usuário, email ou número..."
            placeholderTextColor="#aaa"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountText}>Criar nova conta</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>Meta</Text>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  language: {
    marginBottom: 20,
    fontSize: 14,
    color: '#999',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#F00',
    borderRadius: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3897f0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#3897f0',
    marginBottom: 20,
  },
  createAccountButton: {
    borderColor: '#3897f0',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountText: {
    color: '#3897f0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: '#999',
  },
});
