import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles'; // Importa o arquivo de estilos

export default function App() {
  // Declaracao das variaveis de estado
  const [a, setA] = useState(''); // Coeficiente 'a' da equacao quadratica
  const [b, setB] = useState(''); // Coeficiente 'b' da equacao quadratica
  const [c, setC] = useState(''); // Coeficiente 'c' da equacao quadratica
  const [solution, setSolution] = useState(''); // Solução da equação

  // Funcao para limpar os valores dos coeficientes e da solucao
  const clearValues = () => {
    setA('');
    setB('');
    setC('');
    setSolution('');
  };

  // Função para resolver a equação quadrática
  const solveQuadraticEquation = () => {
    // Conversao dos coeficientes para numeros
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    // Verifica se os coeficientes sao numeros validos
    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setSolution('Por favor, insira valores numéricos válidos.');
      return;
    }

    // Calcula o discriminante
    const discriminant = bNum * bNum - 4 * aNum * cNum;

    // Calcula as raizes da equação quadratica
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
        <Button title="Limpar" onPress={clearValues} color="#f39c12" /> {/* Botao para limpar os valores */}
        <Button title="Resolver" onPress={solveQuadraticEquation} color="#3498db" /> {/* Botao para resolver a equacaao */}
      </View>
      <Text style={styles.solution}>{solution}</Text> {/* Exibe a solucao da equacao */}
    </View>
  );
}
