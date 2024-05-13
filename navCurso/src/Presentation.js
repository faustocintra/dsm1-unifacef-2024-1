import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function PresentationScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <Button title="Sobre mim" onPress={() => navigateTo('AboutMe')} />
      <View style={styles.buttonSpacer} /> 
      <Button title="Curso" onPress={() => navigateTo('Course')} />
      <View style={styles.buttonSpacer} /> 
      <Button title="Instituição" onPress={() => navigateTo('Institution')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10 
  },
  title: {
    fontSize: 48, 
    marginBottom: 200 
  },
  buttonSpacer: {
    height: 10 
  }
});