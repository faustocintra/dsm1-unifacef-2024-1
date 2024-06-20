import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'

const Instagram = () => {
  const navigation = useNavigation()

  const handleEntrarPress = () => {
    navigation.navigate('Feed')
  }

  return (
    <LinearGradient
      colors={['#B870A5', '#EDF6FA', '#D6FADE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.backgroundGradient}
    >
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
          <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Criar nova conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Instagram
