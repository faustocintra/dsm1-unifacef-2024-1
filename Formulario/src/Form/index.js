import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

export default function Form() {

  const [state, setState] = React.useState({
    base: '',
    altura: '',
    tipo: ''
  })
  // Criando as variáveis de estado somente-leitura
  // usando desestruturação
  const {
    base,
    altura,
    tipo
  } = state

  // Funções de manipulação de eventos usando o formato arrow function
  const handleBaseChangeText = text => setState({...state, base: text})
  const handleAlturaChangeText = text => setState({...state, altura: text})

  // Função de manipulação de eventos usando o formato tradicional
  function handleTipoChangeText(text) {
    setState({...state, tipo: text})
  }

  function handleButtonPress() {
  
  }

  return (
    <View>
      <Text>Calculadora de área para formas geométricas planas</Text>
      <View style={styles.horizontal}>
        <Text>Base</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleBaseChangeText}
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Altura</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleAlturaChangeText}
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Tipo (R, T ou E)</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleTipoChangeText}
        />
      </View>
      <View style={styles.horizontal}>
        <Button title="Calcular" onPress={handleButtonPress} />
      </View>
      <View style={styles.horizontal}>
        <Text>Área: </Text>
        <Text>Estado: {JSON.stringify(state)}</Text>
      </View>
    </View>
    )
}