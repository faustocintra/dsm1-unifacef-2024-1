import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import courseImage from '../images/EngSoft.jpg'; 

export default function CourseScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <Image source={courseImage} style={styles.image} />
      <Text style={styles.text}>Engenharia de Software</Text>
      <Button title="Voltar" onPress={() => navigateTo('Presentation')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40 
  },
  image: {
    width: 400, 
    height: 400, 
    marginBottom: 20 
  },
  text:{
    fontSize: 30, 
    marginBottom: 20
  }
});

