//Ana Carolina Neias Ribeiro Vieira - 23987

//Importando os estilos
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { styles } from "./styles";

//Definindo a função
export default function Bhaskara() {
  //Definindo os estados iniciais dos coeficientes (a,b,c), do delta e das raízes
  // '' para strings e null para componentes ainda não determinados
  const [state, setState] = React.useState({
    a: '',
    b: '',
    c: '',
    delta: null,
    x1: null,
    x2: null,
  });

  //Usando a desestruturação para criar variáveis de leitura
  const { a, b, c, delta, x1, x2 } = state;

  //Funções para manipular os coeficientes
  const handleATextChange = (text) => setState({ ...state, a: text });
  const handleBTextChange = (text) => setState({ ...state, b: text });
  const handleCTextChange = (text) => setState({ ...state, c: text });

  //Função de calculo da equação
  const calcular = () => {
    //Conversão dos coeficientes para números
    const coefA = parseFloat(a);
    const coefB = parseFloat(b);
    const coefC = parseFloat(c);

    //Fórmula do delta
    const delta = coefB ** 2 - 4 * coefA * coefC;
    setState({ ...state, delta: delta });

    //Verificação se o delta é negativo
    if (delta < 0) {
      Alert.alert("Não há raízes válidas para a equação de 2º grau.");
      setState({ ...state, x1: null, x2: null, delta: delta }); //Retorno dos valores, sem o cálculo das raízes
    } else { //Caso não for, irá calcular as raízes
      const raizDelta = Math.sqrt(delta);
      const x1 = (-coefB + raizDelta) / (2 * coefA);
      const x2 = (-coefB - raizDelta) / (2 * coefA);
      setState({ ...state, x1: x1, x2: x2, delta: delta }); //Retorno de todos os valores
    }
  };

  //Retorno dos componentes (View) para o App
  return (
    <View style={styles.container}>
      <Text>Informe os coeficientes da equação de 2º grau:</Text>
      <View style={styles.horizontal}>
        {/*Input dos coeficientes a,b,c*/}
        <TextInput
          style={styles.input}
          onChangeText={handleATextChange}
          keyboardType="numeric"
          placeholder="Coeficiente A"
        />
      </View>
      <View style={styles.horizontal}>
        <TextInput
          style={styles.input}
          onChangeText={handleBTextChange}
          keyboardType="numeric"
          placeholder="Coeficiente B"
        />
      </View>
      <View style={styles.horizontal}>
        <TextInput
          style={styles.input}
          onChangeText={handleCTextChange}
          keyboardType="numeric"
          placeholder="Coeficiente C"
        />
      </View>

      {/*Botão para calcular a equação*/}
      <View style={styles.horizontal}>
        <Button title="Calcular" onPress={calcular} />
      </View>

      {/*Visualização dos resultados*/}
      <View>
        <Text>Delta: {delta}</Text>
        <Text>x1: {x1}</Text>
        <Text>x2: {x2}</Text>
      </View>
    </View>
  );
}
