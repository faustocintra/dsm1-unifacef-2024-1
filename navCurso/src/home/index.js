import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; 

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Sobre Mim</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Curso')} style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Curso</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Instituicao')} style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Instituição</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;
