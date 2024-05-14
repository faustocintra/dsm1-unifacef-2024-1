import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Course = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curso</Text>

      <Image
        source={require('../../../assets/image_curse.png')}
        style={styles.courseImage}
      />

      <Text style={styles.info}>Engenharia de Software</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  courseImage: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20,
  },
  info: {
    fontSize: 18, 
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#444',
    padding: 10,
    width: '40%',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

