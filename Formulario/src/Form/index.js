import React from 'react'
import { View, Text, textInput} from 'react-native'
import styles from './styles'

export default function Form() {

    const [state, setState] = React.useState({
        area: '',
        altura: '',
        tipo: ''
    })
    //Criando as variáveis de estado somente-leitura
    //usando desestruturação
    const {
        base,
        altura,
        tipo
    } = state

    //Funções de manipulação de eventos usando o formato arrow function
    const handleBaseTextChange = text => setState({...state, base: text})
    const handleAlturaTextChange = text => setState({...state, altura: text})

    //Funções de manipulação de eventos usando o formato tradicional
    function handleTipoTextChange(text){
        setState({...state, tipo: text})
    }

    return (
      <View>
        <Text>Calculadora de area</Text>
        <View style={styles.horizontal}>
          <Text>Base</Text>
          <TextInput 
          style={styles.textInput}
          onTextChange={handleBaseTextChange}
          />
        </View>
        <View style={styles.horizontal}>
          <Text>Altura</Text>
          <TextInput 
          style={styles.textInput}
          onTextChange={handleAlturaTextChange}
          />
        </View>
        <View style={styles.horizontal}>
          <Text>Tipo (R, T ou E)</Text>
          <TextInput 
          style={styles.textInput} 
          onTextChange={handleTipoTextChange}
          />
        </View>
        <View style={styles.horizontal}>
          <Button title="Calcular" />
        </View>
        <View style={styles.horizontal}>
          <Text>Area: </Text>
          <Text>Estado: {JSON.stringify(state)} </Text>
        </View>
      </View>
    );
  }