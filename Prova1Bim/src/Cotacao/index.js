import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './style'

export default function Cotacao() {
  const [quantiaOrigem, setQuantiaOrigem] = React.useState(0)
  const [cotacaoDestino, setCotacaoDestino] = React.useState(0)

  function calcularQuantiaDestino() {
    if(cotacaoDestino > 0) return quantiaOrigem / cotacaoDestino
    else return ''
  }

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Conversor de moedas</Text>
      
      <Text style={styles.label}>Quantia na moeda de origem</Text>
      <TextInput 
        style={styles.textInput}
        onChangeText={text => setQuantiaOrigem(Number(text))}
        inputMode="decimal"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Cotação da moeda de destino</Text>
      <TextInput 
        style={styles.textInput}
        onChangeText={text => setCotacaoDestino(Number(text))}
        inputMode="decimal"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Quantia na moeda de destino</Text>
      <Text style={styles.result}>{calcularQuantiaDestino()}</Text>     
    </View>
  )
}