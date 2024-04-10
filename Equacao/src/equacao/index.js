import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [solution, setSolution] = useState('');
  
  const clearValues = () => {
    setA('');
    setB('');
    setC('');
    setSolution('');
  };

  const solveQuadraticEquation = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setSolution('Por favor, insira valores numéricos válidos.');
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
      <Text style={styles.title}>Equação Quadrática</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setA(text)}
        placeholder="Coeficiente a"
        keyboardType="numbers-and-punctuation"
        value={a}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setB(text)}
        placeholder="Coeficiente b"
        keyboardType="numbers-and-punctuation"
        value={b}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setC(text)}
        placeholder="Coeficiente c"
        keyboardType="numbers-and-punctuation"
        value={c}
      />
      <View style={styles.buttonContainer}>
        <Button title="Limpar" onPress={clearValues} color="#f39c12" />
        <Button title="Resolver" onPress={solveQuadraticEquation} color="#3498db" />
      </View>
      <Text style={styles.solution}>{solution}</Text>
    </View>
  );
}
