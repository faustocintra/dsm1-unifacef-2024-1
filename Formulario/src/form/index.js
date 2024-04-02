import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import styles from './styles'

export default function Form(){
    const[state, setState]= React.useState({
        base: '',
        altura: '',
        tipo:''
    })
//Criando as variaveis de estado somente leitura
//usando desestruturação
const{
    base,
    altura,
    tipo
} =state
//funçoes de manipulação de eventos usando o formato arrow function
const handleBaseTextChange = Text => setState({...state, base:Text})
const handleAlturaTextChange = Text => setState({...state, altura:Text})

//funçao de manipulaçao de eventos usando formato tradicional
function handleTipoTextChange(Text){
    setState({...state, tipo:Text})
}
}

export default function Form() {
    return(
  <View>
    <Text>Calculadora de área para formas geométricas planas</Text>
    <View> style={styles.horizontal}
        <Text>Base</Text>
        <TextInput style= {styles.TextInput} />
    </View>
    <View>
        <Text>Altura</Text>
        <TextInput />
    </View>
    <View>
        <Text>Tipo (R, T ou E)</Text>
        <TextInput />
    </View>
    <View>
        <Button title='Calcular'/>
    </View>









  </View>
    
      

    )
}