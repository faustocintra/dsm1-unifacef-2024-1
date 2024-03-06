import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Students = ({ name, grade1, grade2 }) => {
  const media = (grade1 + grade2) / 2; // Calcula a média corretamente

  return (
    <View style={styles.card}>
      <View style={styles.gradientBackground}>
      </View>
      <Text style={styles.cardText}>Aluno: {name}</Text>
      <View style={styles.context}>
        <Text style={styles.cardText} > Nota 1: {grade1}</Text>
        <Text style={styles.cardText}> Nota 2: {grade2}</Text>
        <Text style={styles.cardText}> Média: {media}</Text>
      </View>
    </View>
  );
};

export default Students;