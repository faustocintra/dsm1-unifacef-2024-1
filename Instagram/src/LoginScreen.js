import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const users = [
    { username: 'icaro', password: '123456' },
    { username: 'user2', password: 'password2' },
  ]

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
      navigation.navigate('HomeScreen')
    } else {
      Alert.alert('Erro', 'Credenciais inválidas')
    }
  }

  return (
    <LinearGradient
      colors={['#FFFDE7', '#FCE4EC', '#E3F2FD', '#E3F2FD', '#E8F5E9', '#E8F5E9']}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.language}>Português (Brasil)</Text>
        <Image
          source={require('../assets/logo-insta-removebg-preview.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário, email ou número de telefone"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.boldLinkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link2}>
          <Text style={styles.linkText2}>Criar nova conta</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/meta-removebg-preview.png')}
          style={styles.logo2}
        />
      </View>
    </LinearGradient>
  )
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
  language: {
    position: 'absolute',
    top: 5,
    color: '#808080', 
    fontSize: 16,
  },
  logo: {
    width: 65,
    height: 65,
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#0095f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    marginTop: 2,
    padding: 5,
    alignItems: 'center',
  },
  boldLinkText: {
    fontWeight: 'bold',
    color: '#262626',
    fontSize: 16,
  },
  link2: {
    borderColor: '#026df7',
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 170,
  },
  linkText2: {
    color: '#026df7',
    fontSize: 16,
  },
  logo2: {
    width: 70,
    height: 20,
    marginBottom: 20,
    marginTop: 10,
  },
})

export default LoginScreen