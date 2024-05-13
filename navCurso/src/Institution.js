import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import institutionImage from '../images/unifacef.png'; 


export default function InstitutionScreen({ navigateTo }) {
  return (
      <View style={styles.container}>
      <Image source={institutionImage} style={styles.image} />
      <Text style={styles.text}>Unifacef </Text>
      <Text style={styles.text}>Telefone:</Text>
      <Text style={styles.text}>XXXXXXXXXX</Text>
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
    width: 400,
    marginBottom: 20
  },
  text:{
    fontSize: 30, 
    marginBottom: 20
  }
});
