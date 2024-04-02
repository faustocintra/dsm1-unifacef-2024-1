import React from 'react'
import  { View, Text } from 'react-native'
import styles from './styles'

export default function Viagem({ destino, distancia, etanol, gasolina }) {

  consumoEtanol = distancia / 9 * etanol
  consumoGasolina = distancia / 11 * gasolina

  return <View style={ consumoEtanol < consumoGasolina ? styles.etanol : styles.gasolina }>
    <Text style={styles.destino}>{destino}</Text>
    <Text>Distância: {distancia}km</Text>
    <Text>Preço do etanol: {etanol.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) }</Text>
    <Text>Preço da gasolina: {gasolina.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) }</Text>
  </View>
}