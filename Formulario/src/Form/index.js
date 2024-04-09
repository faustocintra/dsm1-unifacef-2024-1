import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

export default function Form() {

  const [state, setState] = React.useState({
    base: '',
    altura: '',
    tipo: '',
    area
  })
  // Criando as variáveis de estado somente-leitura
  // usando desestruturação
  const {
    base,
    altura,
    tipo,
    area
  } = state

  // Funções de manipulação de eventos usando o formato arrow function
  const handleBaseChangeText = text => setState({...state, base: text})
  const handleAlturaChangeText = text => setState({...state, altura: text})

  // Função de manipulação de eventos usando o formato tradicional
  function handleTipoChangeText(text) {
    setState({...state, tipo: text})
  }

  function handleButtonPress() {
    let result 
    switch (tipo) {
      case 'R':
          result = Number(base) * Number(altura)
          break
      case 'T':
        result = Number(base) * Number(altura) / 2
      case 'E':
        result = (Number(base) / 2)  * (Number(altura) / 2) * Math.PI
        break
      default:
        result: '[TIPO INVALIDO]'
    }
    setState({...state, area: result})
  }

  return (
    <View>
      <Text>Calculadora de área para formas geométricas planas</Text>
      <View style={styles.horizontal}>
        <Text>Base</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleBaseChangeText}
          inputMode='decimal'
          keyboardType='decimal-pad'
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Altura</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleAlturaChangeText}
          inputMode='decimal'
          keyboardType='decimal-pad'
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Tipo (R, T ou E)</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleTipoChangeText}
          maxLength={1}
          autoCapitalize='characters'
        />
      </View>
      <View style={styles.horizontal}>
        <Button title="Calcular" onPress={handleButtonPress} />
      </View>
      <View style={styles.horizontal}>
        <Text>Area: {area}</Text>
      </View>
    </View>
  )
}
