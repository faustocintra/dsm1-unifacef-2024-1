import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import  styles from './styles';

export default function App() {
  const [coefficients, setCoefficients] = useState({ a: '', b: '', c: '' });
  const [solution, setSolution] = useState('');

  const updateCoefficient = (coefficient, value) => {
    setCoefficients(prevState => ({
      ...prevState,
      [coefficient]: value
    }));
  };

  const solveQuadraticEquation = () => {
    const { a, b, c } = coefficients;
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setSolution('Error! Informe números válidos.');
      return;
    }

    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const x1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setSolution(`x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    } else if (discriminant === 0) {
      const x = -bNum / (2 * aNum);
      setSolution(`x = ${x.toFixed(2)}`);
    } else {
      setSolution('Não existem raízes reais');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Insira os coeficientes da equação:</Text>
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
      <View style={styles.solutionContainer}>
        <Text style={styles.solution}>{solution}</Text>
      </View>
    </View>
  );
}

