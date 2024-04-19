import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

export default function Form() {

  const [state, setState] = React.useState({
    a: '',
    b: '',
    c: '',
    delta: '',
    resultado: ''
  })
  // Criando as variáveis de estado somente-leitura
  // usando desestruturação
  const {
    a: a,
    b: b,
    c: c,
    delta: delta,
    resultado: resultado
  } = state

  // Funções de manipulação de eventos usando o formato arrow function
  const handleAChangeText = text => setState({...state, a: text})
  const handleBChangeText = text => setState({...state, b: text})
  const handleCChangeText = text => setState({...state, c: text})

  function handleButtonPress() {
    let x1
    let x2
    let deltaAux

    //Cálculo do delta
    deltaAux = (b ** 2) - (4 * a * c)

    //Verifica se delta é maior ou igual a zero. Caso seja, x1 e x2 tem seu valor alterado
    deltaAux >= 0 ? () => {
      x1 = (-b + Math.sqrt(deltaAux))/(2*a);
      x2 = (-b - Math.sqrt(deltaAux))/(2*a);
    } : () => {};

    //Atualiza o estado com os resultados do cálculo delta e bhaskara
    setState({...state, delta: deltaAux})
    setState({...state, resultado: deltaAux >= 0 ? `x1: ${x1} | x2: ${x2}` : `Não há raízes validas para a equação`})
  }

  /*
    Propriedades do TextInput
    inputMode: determina o tipo de entrada aceita pelo TextInput
      (text, decimal, numeric, email, tel, etc. - ver documentação
      do React Native para ver todos os valores possíveis)
    keyboardType: determina o tipo de teclado que aparecerá quando
      o TextInput estiver focado (default, number-pad, decimal-pad,
      numeric, etc. - ver documentação para todos os valores possíveis)
  */

  return (
    <View>
      <Text>Calculadora Bhaskara</Text>
      <View style={styles.horizontal}>
        <Text>a</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleAChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <Text>b</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleBChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <Text>c</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleCChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <Button title="Calcular" onPress={handleButtonPress} />
      </View>
      <View style={styles.horizontal}>
        <Text>Delta: {delta}</Text>
      </View>
      <View style={styles.horizontal}>
        <Text>Resultado: {resultado}</Text>
      </View>
    </View>
  )
}

/*
  Falando honestamente sobre como o código foi feito
  clonei o repositório das aulas, peguei o projeto
  'Formulario' e alterei. A lógica e componentes
  de ambos são bem parecidos, então realmente bastava
  apenas alterar o código
*/