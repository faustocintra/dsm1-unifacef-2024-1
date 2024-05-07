import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles'; 

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sobre Mim"
          onPress={() => navigation.navigate('Sobre')}
          color="#007AFF"
          style={styles.button}
        />
        <Button
          title="Curso"
          onPress={() => navigation.navigate('Curso')}
          color="#007AFF"
          style={[styles.button, styles.middleButton]} // Adiciona estilo extra para o botão do meio
        />
        <Button
          title="Instituição"
          onPress={() => navigation.navigate('Instituicao')}
          color="#007AFF"
          style={styles.button}
        />
      </View>
    </View>
  )
}

export default Home;
