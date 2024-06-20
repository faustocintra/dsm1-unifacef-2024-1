import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Aluno({ nome, nota1, nota2, faltas }) {

  const media = (nota1 + nota2) / 2

  return <View>
    <Text>Nome: {nome}</Text>
    <Text>Nota 1: {nota1.toLocaleString('pt-BR',{ minimumFractionalDigits: 1, maximumFractionalDigits: 1 })}</Text>
    <Text>Nota 2: {nota2.toLocaleString('pt-BR',{ minimumFractionalDigits: 1, maximumFractionalDigits: 1 })}</Text>
    <Text>Faltas: {faltas}</Text>
    <Text>Media: {media.toLocaleString('pt-BR',{ minimumFractionalDigits: 1, maximumFractionalDigits: 1 })}</Text>
    <Text style={media >= 6 && faltas < 20 ? styles.aprovado : styles.reprovado }>
      Situação: {media >= 6 && faltas < 20 ? 'APROVADO' : 'REPROVADO'}
    </Text>
  </View>
}