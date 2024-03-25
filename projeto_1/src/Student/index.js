// @ts-nocheck
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Aluno = ({ name, nota1, nota2, faltas }) => {

  const media = (nota1 + nota2) / 2;

  const status = media >= 6 && faltas < 20 ? 'Aprovado' : 'Reprovado';

  return (
    <View style={styles.card}>
      <View style={styles.gradientBackground}>
      </View>
      <Text style={styles.cardText}>Aluno: {name}</Text>
      <View style={styles.context}>
        <Text style={styles.cardText}>Primeira Nota: {nota1}</Text>
        <Text style={styles.cardText}>Segunda Nota: {nota2}</Text>
        <Text style={styles.cardText}>Quantidade de faltas: {faltas}</Text>
        <Text style={styles.cardText}>Situação: {status}</Text>
      </View>
    </View>
  );
};

export default Aluno;