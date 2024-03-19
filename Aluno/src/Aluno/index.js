import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';


const Aluno = ({ nome, nota1, nota2, faltas }) => {
  const media = (nota1 + nota2) / 2;

  const status = media >= 6 && faltas < 20 ? 'Aprovado' : 'Reprovado';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Nota 1: {nota1}</Text>
      <Text style={styles.text}>Nota 2: {nota2}</Text>
      <Text style={styles.text}>Faltas: {faltas}</Text>
      <Text style={[styles.text, status === 'Aprovado' ? styles.aprovado : styles.reprovado]}>Status: {status}</Text>
    </View>
  );
};

export default Aluno;
