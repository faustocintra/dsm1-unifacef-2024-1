import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Curso = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: 'caminho/para/imagem_do_curso.jpg' }} style={{ width: 200, height: 200 }} />
        <Text style={styles.title}>Nome do Curso</Text>
        <Text>Desenvolvimento de software para dispositivos moveis I</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Curso;
