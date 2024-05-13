import React from 'react'
import { View, Text, TextInput } from 'react-native'
import s from './style'

export default function Equacao2Grau() {

  const [state, setState] = React.useState({
    a: 0,
    b: 0,
    c: 0
  })
  const {
    a,
    b,
    c
  } = state

  function calculateDelta() {
    return (b ** 2) - 4 * a * c
  }

  function calculateRoots() {
    const delta = calculateDelta()

    if(delta < 0) return "(Não há raízes reais)"

    // Quando o delta é igual a zero, só há uma raiz
    else if (delta == 0) return -b / 2 * a

    else { // Delta positivo, duas raízes possíveis
      const x1 = (-b + Math.sqrt(delta)) / 2 * 1
      const x2 = (-b - Math.sqrt(delta)) / 2 * 1
      return `${x1}, ${x2}`
    }
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>Resolvedor de Equação do 2ª Grau</Text>
      <View>
        <Text style={s.label}>Coeficiente A</Text>
        <TextInput 
          style={s.textInput}
          onChangeText={text => setState({...state, a: Number(text) })}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View>
        <Text style={s.label}>Coeficiente B</Text>
        <TextInput 
          style={s.textInput}
          onChangeText={text => setState({...state, b: Number(text) })}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View>
        <Text style={s.label}>Coeficiente C</Text>
        <TextInput 
          style={s.textInput}
          onChangeText={text => setState({...state, c: Number(text) })}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View>
        <Text style={s.label}>Valor do delta</Text>
        <Text>{calculateDelta()}</Text>
      </View>
      <View>
        <Text style={s.label}>Raíz(es)</Text>
        <Text>{calculateRoots()}</Text>
      </View>
    </View>
    
  )

}