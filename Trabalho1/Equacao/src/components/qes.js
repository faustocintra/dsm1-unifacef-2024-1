import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const QuadraticEquationSolver = () => {
  // Estados para armazenar os valores dos coeficientes a, b e c
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  // Estados para armazenar o resultado do cálculo do delta e das raízes
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);

  // Função para calcular o delta e as raízes da equação de segundo grau
  const calcularRaizes = () => {
    // Calcula o delta usando a fórmula delta = (b^2) - (4 * a * c)
    const deltaValue = Math.pow(b, 2) - 4 * a * c;
    setDelta(deltaValue);

    if (deltaValue < 0) {
      // Se o delta for negativo, não há raízes reais para a equação de segundo grau
      setX1(null);
      setX2(null);
    } else {
      // Se o delta for igual ou maior que zero, calcula as raízes usando a fórmula de Bhaskara
      const x1Value = (-b + Math.sqrt(deltaValue)) / (2 * a);
      const x2Value = (-b - Math.sqrt(deltaValue)) / (2 * a);
      setX1(x1Value);
      setX2(x2Value);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Inputs para os coeficientes a, b e c */}
      <TextInput
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
        placeholder="Coeficiente a"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(parseFloat(text))}
      />
      <TextInput
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
        placeholder="Coeficiente b"
        keyboardType="numeric"
        value={b}
        onChangeText={(text) => setB(parseFloat(text))}
      />
      <TextInput
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
        placeholder="Coeficiente c"
        keyboardType="numeric"
        value={c}
        onChangeText={(text) => setC(parseFloat(text))}
      />
      {/* Botão para calcular as raízes */}
      <Button title="Calcular" onPress={calcularRaizes} />
      {/* Mostra o valor do delta e as raízes calculadas */}
      <Text style={{ marginTop: 20 }}>Delta: {delta}</Text>
      <Text>x1: {x1}</Text>
      <Text>x2: {x2}</Text>
    </View>
  );
};

export default QuadraticEquationSolver;