import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const QuadraticEquationSolver = () => {
  // declarando os estados para (a, b, c), delta e as raízes (x1, x2)
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);

  // Função que realiza o calcular o delta e as raízes da equação do segundo grau
  const calculateDeltaAndRoots = () => {
    // Calculando o valor de delta usando a fórmula
    const deltaValue = (b * b) - (4 * a * c);
    setDelta(deltaValue);
    // Verificando se o delta é negativo
    if (deltaValue < 0) {
      // Se delta for negativo, não há raízes válidas
      setX1(null);
      setX2(null);
    } else {
      // Se delta for igual ou maior que zero, calcula as raízes usando a fórmula de Bhaskara
      const sqrtDelta = Math.sqrt(deltaValue);
      const x1Value = (-b + sqrtDelta) / (2 * a);
      const x2Value = (-b - sqrtDelta) / (2 * a);
      setX1(x1Value);
      setX2(x2Value);
    }
  };

  return (
    <View>
      {/* Entradas para os coeficientes a, b e c */}
      <TextInput
        placeholder="Digite o valor de a"
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(parseFloat(text))}
      />
      <TextInput
        placeholder="Digite o valor de b"
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(parseFloat(text))}
      />
      <TextInput
        placeholder="Digite o valor de c"
        keyboardType="numeric"
        value={c}
        onChangeText={text => setC(parseFloat(text))}
      />
      {/* Botão para calcular o delta e as raízes */}
      <Button title="Calcular" onPress={calculateDeltaAndRoots} />
      {/* Exibe o delta e as raízes, se forem calculadas */}
      {delta !== null && (
        <Text>
          Delta: {delta}
          {/* Exibe as raízes se o delta for maior ou igual a zero */}
          {delta < 0 ? ' - Não há raízes válidas para a equação de 2º grau.' :
          ` - Raízes: x1 = ${x1}, x2 = ${x2}`}
        </Text>
      )}
    </View>
  );
};

export default QuadraticEquationSolver;
