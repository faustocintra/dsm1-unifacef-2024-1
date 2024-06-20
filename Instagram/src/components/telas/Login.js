import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Username, or email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bottom')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text}>Nicolas Torres Chiarelo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fafafa',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0095f6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#8e8e8e',
    marginVertical: 20,
  },
  facebookText: {
    color: '#385185',
    fontSize: 16,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#385185',
    fontSize: 12,
  },
  text: {
    color: '#8e8e8e', 
    fontFamily: 'Lobster-Regular',
    fontSize: 15,
    marginTop: 20,

  },
});

export default Login;
