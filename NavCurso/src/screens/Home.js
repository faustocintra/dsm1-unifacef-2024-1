import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu APP</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SobreMim')}>
        <Text style={styles.buttonText}>Sobre Mim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Curso')}>
        <Text style={styles.buttonText}>Curso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Instituicao')}>
        <Text style={styles.buttonText}>Instituição</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff', 
    padding: 10, 
    marginVertical: 8, 
    width: '40%', 
    alignItems: 'center',
    borderRadius: 8, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Home
