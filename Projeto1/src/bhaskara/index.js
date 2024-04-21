import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import style from './style';

const CalcularBhaskara = () => {
  // Estado para armazenar os valores de a, b e c
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  // Função para calcular o delta
  const calculaDelta = () => {
    return Math.pow(b, 2) - 4 * a * c;
  };

  // Função para calcular as raízes usando a fórmula de Bhaskara
  const calculaRaizes = () => {
    const delta = calculaDelta();
    if (delta < 0) {
      return 'Não há raízes válidas para a equação de segundo grau.';
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
  };

  return (
    <View>
      {/* Inputs para os coeficientes */}
      <TextInput
        placeholder="Valor de a"
        value={a}
        onChangeText={text => setA(parseFloat(text))}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Valor de b"
        value={b}
        onChangeText={text => setB(parseFloat(text))}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Valor de c"
        value={c}
        onChangeText={text => setC(parseFloat(text))}
        keyboardType="numeric"
      />
      {/* Botão para calcular e exibir as raízes */}
      <Button title="Calcular Raízes" onPress={() => alert(calculaRaizes())} />
    </View>
  );
};

export default CalcularBhaskara;
