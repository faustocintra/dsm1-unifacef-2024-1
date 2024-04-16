import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style'; 

const Cotacao = () => {
// Usando o useState para armazenar a quantia na moeda de origem, a cotação na moeda de destino e o resultado do cálculo
const [quantiaOrigem, setQuantiaOrigem] = useState('');
const [cotacaoDestino, setCotacaoDestino] = useState('');
const [resultado, setResultado] = useState('');

// Função para calcular a quantia na moeda de destino
const calcularQuantiaDestino = () => {
  // Verifica se os valores estão preenchidos
  if (!quantiaOrigem || !cotacaoDestino) {
    setResultado(''); 
    return; // Retorna para evitar o cálculo com valores vazios
  }

  // Converte os valores para números usando o parseFloat
  const quantia = parseFloat(quantiaOrigem);
  const cotacao = parseFloat(cotacaoDestino);

  // Verifica se os valores convertidos são válidos
  if (isNaN(quantia) || isNaN(cotacao)) {
    setResultado('');
    return; // Retorna para evitar o cálculo com valores inválidos
  }
  // Calcula a quantia na moeda de destino e arredonda para duas casas decimais
  const resultadoCalculado = quantia / cotacao;
  setResultado(resultadoCalculado.toFixed(2)); // Atualiza o state resultado com o resultado calculado
};

// UseEffect para calcular automaticamente quando os valores mudam nos inputs
useEffect(() => {
  calcularQuantiaDestino(); // Chama a função de cálculo sempre que 'quantiaOrigem' ou 'cotacaoDestino' mudam
}, [quantiaOrigem, cotacaoDestino]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho do componente */}
      <Text style={styles.header}>Conversor de moedas</Text>
      {/* Campo de entrada para a quantia na moeda de origem */}
      <Text style={styles.italicText}>Quantia na moeda de origem</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantiaOrigem}
        onChangeText={(text) => setQuantiaOrigem(text)}
      />
      {/* Campo de entrada para a cotação na moeda de destino */}
      <Text style={styles.italicText}>Cotação na moeda de destino</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cotacaoDestino}
        onChangeText={(text) => setCotacaoDestino(text)}
      />
      {/* Campo para exibir a quantia na moeda de destino calculada */}
      <Text style={styles.italicText}>Quantia na moeda de destino</Text>
      <Text style={styles.resultText}>{resultado}</Text>
    </View>
  );
};

export default Cotacao;
