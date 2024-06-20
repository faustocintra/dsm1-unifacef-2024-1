// Lib imports
import React from 'react'
import { Text, View, TextInput, Image, Pressable } from 'react-native'

// Local imports
import styles from './style'
import { InstagramLogo } from './assets/logo.png'

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.logo} source={InstagramLogo} />

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
        <Text style={{ color: "black" }}>Login</Text>
      </Pressable>
    </View>
  )
}