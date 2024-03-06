import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Students = ({ name, grade1, grade2 }) => {
  const media = (grade1 + grade2) / 2; // Calcula a média corretamente

  return (
    // <View style={styles.students}>
    //   <Text>Estudandes</Text>
    //   <Text style={styles.name}>Estudante:{name}</Text>
    //   <Text style={styles.grade}>Nota 1: {grade1}</Text>
    //   <Text style={styles.grade}>Nota 2:{grade2}</Text>
    //   <Text style={styles.media}>Média: {media}</Text>
    // </View>


    <View style={styles.card}>
      <View style={styles.gradientBackground}>
      </View>
      {/* <div class="img"> */}
      <Text style={styles.cardText}>Aluno: {name}</Text>
      <View style={styles.context}>
        <Text style={styles.cardText} > Nota 1: {grade1}</Text>
        <Text style={styles.cardText}> Nota 2: {grade2}</Text>
        <Text style={styles.cardText}> Média: {media}</Text>
      </View>
    </View>
    // <button> Click
    // </button>
    // </View >
  );
};

export default Students;