import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import myImage from '../images/Me.jpg'; 

export default function AboutMeScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <Image source={myImage} style={styles.image} /> 
      <Text style={styles.text}>Nome: Ruan Carlos Passeto</Text>
      <Text style={styles.text}>Telefone: 99999-9999</Text>
      <Text style={styles.text}>Email: ruanpasseto@gmail.com</Text>
      <Button title="Voltar" onPress={() => navigateTo('Presentation')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10 
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 100 
  },
  text: {
    fontSize: 24,
    marginBottom: 40
  }
});
