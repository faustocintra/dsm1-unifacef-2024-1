import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Students = ({ name, primeiraNota, segundaNota }) => {

  return (

    <View style={styles.card}>
      <View style={styles.gradientBackground}>
      </View>
      <Text style={styles.cardText}>Aluno: {name}</Text>
      <View style={styles.context}>
        <Text style={styles.cardText} > Primeira Nota: {primeiraNota}</Text>
        <Text style={styles.cardText}> Segunda Nota: {segundaNota}</Text>
      </View>
    </View>

  );
};

export default Students;