import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style'

//Aqui declaro minhas variaveis que serão mostradas e inicializo as mesmas vazias
export default function Form() {
  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
    raizes: '',
  });

  // Funções de manipulação de eventos usando o formato arrow function
  const handleCoeficienteChange = (coeficiente, value) => {
      // Verifica se o valor inserido é um número e caso não for não atribui 
      if (!isNaN(value)) {
        setState({ ...state, [coeficiente]: value });
    }
  };

//função que pego minhas variaveis de estado calculo as raízes 
  function handleButtonPress() {
    const { a, b, c } = state;
    const delta = Math.pow(b, 2) - 4 * a * c;
    
    if (delta < 0) {
      setState({ ...state, raizes: 'As raízes não são reais' }); //caso o valor de delta seja 0, não continua
    } 
    else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setState({ ...state, raizes: `X1: ${x1} / X2: ${x2}` });
    }
  }
  
  return (
    <View>
      <Text>Calculadora de Equação do 2º grau:</Text>
      <View style={styles.horizontal}>
        <Text>a:  </Text>
        <TextInput
          style={styles.textInput}
          value={state.a}
          onChangeText={(text) => handleCoeficienteChange('a', text)}
        />
      </View>
      <View style={styles.horizontal}>
        <Text>b:  </Text>
        <TextInput
          style={styles.textInput}
          value={state.b}
          onChangeText={(text) => handleCoeficienteChange('b', text)}
        />
      </View>
      <View style={styles.horizontal}>
        <Text>c:  </Text>
        <TextInput
          style={styles.textInput}
          value={state.c}
          onChangeText={(text) => handleCoeficienteChange('c', text)}
        />
      </View>
      <View style={styles.horizontal}>
        <Button title="Calcular" onPress={handleButtonPress} />
      </View>
      <View style={styles.horizontal}>
        <Text>Raízes: {state.raizes}</Text>
      </View>
    </View>
  );
}
