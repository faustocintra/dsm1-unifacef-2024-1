// Importa as bibliotecas e componentes necessários
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
// Importa os estilos definidos no arquivo styles.js
import styles from './styles';

// Define o componente Trabalho
const Trabalho = () => {
  // Define o estado para os coeficientes a, b e c
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  // Define a função para calcular o delta
  const calculateDelta = () => {
    // Calcula o delta usando a fórmula do delta
    const delta = (b ** 2) - (4 * a * c);
    // Verifica se o delta é menor que zero
    if (delta < 0) {
      // Se for, imprime uma mensagem informando que não há raízes reais
      console.log('Não há raízes válidas para a equação do 2º grau.');
    } else {
      // Se não for, calcula as raízes usando a fórmula de Bhaskara
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      // Imprime as raízes
      console.log(`As raízes da equação são x1 = ${x1} e x2 = ${x2}`);
    }
  };

  // Define o que será renderizado pelo componente
  return (
    // View é como uma div em HTML, usada para agrupar outros componentes
    <View style={styles.container}>
      // TextInput é um campo de entrada de texto
      <TextInput style={styles.input} placeholder="a" onChangeText={text => setA(text)} value={a} />
      <TextInput style={styles.input} placeholder="b" onChangeText={text => setB(text)} value={b} />
      <TextInput style={styles.input} placeholder="c" onChangeText={text => setC(text)} value={c} />
      // Button é um botão que executa uma ação quando pressionado
      <Button title="Calcular Delta" onPress={calculateDelta} />
    </View>
  );
};

// Exporta o componente Trabalho para ser usado em outros arquivos
export default Trabalho;
