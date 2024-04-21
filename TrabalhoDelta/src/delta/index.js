import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const Equacao = () => {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [resultado, setResultado] = useState('');

  // Função para calcular as raízes da equação do segundo grau
  const calcularRaizes = () => {
    const a = parseFloat(A);
    const b = parseFloat(B);
    const c = parseFloat(C);

    // Calcula o delta da equação
    const delta = Math.pow(b, 2) - 4 * a * c;

    // Verifica se o delta é negativo
    if (delta < 0) {
      // Se for negativo, mostra um erro
      setResultado('Não há raízes válidas!');
    } else {
      // calcula as raízes usando a fórmula de Bhaskara
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setResultado(`x1 = ${x1}, x2 = ${x2}`);
    }
  };

  // Renderiza o componente com os inputs e o botão de cálculo
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Coeficiente a"
        value={A}
        onChangeText={text => setA(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Coeficiente b"
        value={B}
        onChangeText={text => setB(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Coeficiente c"
        value={C}
        onChangeText={text => setC(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular Raízes" onPress={calcularRaizes} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

export default Equacao;
