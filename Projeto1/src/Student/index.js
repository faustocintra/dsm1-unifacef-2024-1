import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Aluno = ({ nomeAluno, grade1, grade2 }) => {
  return <View style={styles.aluno}>
            <View style={styles.titleContainer}>
              <Text style={ styles.nome}> {nomeAluno} </Text>
            </View>     
            <Text style={ styles.grades}> Nota da 1º Bim: {grade1}</Text>
            <Text style={ styles.grades}> Nota da 2º Bim: {grade2}</Text>
            <Text style={ styles.grades}> Média: {(grade1 + grade2) / 2}</Text>
         </View>
};

export default Aluno;