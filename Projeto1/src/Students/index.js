import React from 'react';
import styles from './style';

import { Text, View } from 'react-native';

const Students = ({ name, grade1, grade2 }) => {
  const media = (grade1 + grade2) / 2;

  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text style={styles.subTitle}>Nota 1º bim: {grade1}</Text>
      <Text style={styles.subTitle}>Nota 2º bim: {grade2}</Text>
      <Text style={styles.subTitle}>Média: {media}</Text>
    </View>
  );
};

export default Students;