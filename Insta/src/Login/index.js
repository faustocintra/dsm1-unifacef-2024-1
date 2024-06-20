// Lib imports
import React from 'react'
import { Text, View, TextInput, Image, Pressable } from 'react-native'

// Local imports
import styles from './style'

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
    <Image style={styles.logo} source={require('../assets/logo.png')} />

      <TextInput
        style={styles.textInput}
        placeholder="Username"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.loginButton}
      >
        <Text style={{ color: "white" }}>-- Login --</Text>
      </Pressable>
      
      <Text style={{ color: "black" }}>Yune Uzuki - 23922</Text>
    </View>
  )
}