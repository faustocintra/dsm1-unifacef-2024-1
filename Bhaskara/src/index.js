import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles';

export default function App() {
  // useState para armazenar e atualizar os coeficientes (a, b, c) da equação quadrática.
  const [coefficients, setCoefficients] = useState({ a: '', b: '', c: '' });
  // useState para armazenar e exibir a solução da equação.
  const [solution, setSolution] = useState('');

  // Função para atualizar os coeficientes com base no input do usuário.
  const updateCoefficient = (coefficient, value) => {
    setCoefficients(prevState => ({
      ...prevState,
      [coefficient]: value
    }));
  };

  // Função principal que resolve a equação quadrática.
  const solveQuadraticEquation = () => {
    // Extrai os coeficientes a, b, c do estado.
    const { a, b, c } = coefficients;
    // Converte os coeficientes de string para float.
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    // Verifica se algum dos coeficientes não é um número válido e exibe uma mensagem de erro.
    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setSolution('Error! Informe números válidos.');
      return;
    }

    // Calcula o discriminante (b² - 4ac) da equação.
    const discriminant = bNum * bNum - 4 * aNum * cNum;

    // Verifica o valor do discriminante para determinar o número de raízes reais.
    if (discriminant > 0) {
      // Dois resultados reais e distintos.
      const x1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setSolution(`x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    } else if (discriminant === 0) {
      // Uma única raiz real (raízes reais e iguais).
      const x = -bNum / (2 * aNum);
      setSolution(`x = ${x.toFixed(2)}`);
    } else {
      // Quando o discriminante é negativo, não existem raízes reais.
      setSolution('Não existem raízes reais');
    }
  };

  // UI do aplicativo com TextInputs para cada coeficiente e um botão para resolver a equação.
  return (
    <View style={styles.container}>
      <Text>Insira os coeficientes da equação:</Text>
      {/* TextInput para cada coeficiente (a, b, c) */}
      <TextInput
        style={styles.input}
        onChangeText={text => updateCoefficient('a', text)}
        placeholder="Informe o número a"
        keyboardType="numbers-and-punctuation"
        value={coefficients.a}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => updateCoefficient('b', text)}
        placeholder="Informe o número b"
        keyboardType="numbers-and-punctuation"
        value={coefficients.b}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => updateCoefficient('c', text)}
        placeholder="Informe o número c"
        keyboardType="numbers-and-punctuation"
        value={coefficients.c}
      />
      <Button title="Calcular" onPress={solveQuadraticEquation} />
      {/* Exibe a solução da equação */}
      <View style={styles.solutionContainer}>
        <Text style={styles.solution}>{solution}</Text>
      </View>
    </View>
  );
}