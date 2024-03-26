import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './style';
export default function Aluno({nome,nota1,nota2,faltas}) {
    const media = (nota1 + nota2)/2;
    return (
        <View>
        <Text>Nome: {nome}</Text>
        <Text>Nota 1: {nota1}</Text>
        <Text>Nota 2: {nota2}</Text>
        <Text>Faltas: {faltas}</Text>
        <Text>Situação:{media >= 6 && faltas <20 ? 'aprovado' : 'Reprovado'}</Text>
    </View> 
    )

    import { StyleSheet}  from 'react-native';

    const styles = StyleSheet.create({
        aprovado: {
        color: 'blue',
      },
      reprovado: {
        color: 'red',
      }
    });
}