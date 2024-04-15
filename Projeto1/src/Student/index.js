import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Student = () => {
  const [name, setName] = useState('');
  const [grade1, setGrade1] = useState('');
  const [grade2, setGrade2] = useState('');
  const [media, setMedia] = useState(null);

  const calcularMedia = () => {
    const nota1 = parseFloat(grade1);
    const nota2 = parseFloat(grade2);
    const novaMedia = (nota1 + nota2) / 2;
    setMedia(novaMedia.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.infoContainer}>
        <TextInput
          placeholder="Nome do aluno"
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          placeholder="Nota 1º Bimestre"
          style={styles.input}
          onChangeText={(text) => setGrade1(text)}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Nota 2º Bimestre"
          style={styles.input}
          onChangeText={(text) => setGrade2(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={calcularMedia} style={styles.button}>
          <Text style={styles.buttonText}>Calcular Média</Text>
        </TouchableOpacity>
        {media !== null && <Text style={styles.media}>Média: {media}</Text>}
      </View>
    </View>
  );
};

export default Student;