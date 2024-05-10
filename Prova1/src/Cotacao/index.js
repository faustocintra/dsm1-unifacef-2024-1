import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles'; // Importando os estilos do componente

const Cotacao = () => {
  // Definindo estados para armazenar a quantia da moeda de origem e a cotação da moeda de destino
  const [quantiaMoedaOrigem, setQuantiaMoedaOrigem] = useState('');
  const [cotacaoMoedaDestino, setCotacaoMoedaDestino] = useState('');

  // Função para calcular a quantia na moeda de destino com base nos estados
  const calcularQuantiaDestino = () => {
    const quantiaDestino = parseFloat(quantiaMoedaOrigem) / parseFloat(cotacaoMoedaDestino);
    // Verificando se o resultado é um número válido
    return isNaN(quantiaDestino) ? 'Valor inválido' : quantiaDestino.toFixed(2);
  };

  return (
    <View style={styles.container}>
      {/* Título do conversor de moedas */}
      <Text style={styles.title}>Conversor de moedas</Text>

      {/* Campo para inserir a quantia na moeda de origem */}
      <Text style={styles.label}>Quantia na moeda de origem</Text>
      <TextInput
        style={styles.input}
        value={quantiaMoedaOrigem}
        onChangeText={setQuantiaMoedaOrigem}
        keyboardType="numeric" // Teclado numérico para entrada de valores
      />

      {/* Campo para inserir a cotação na moeda de destino */}
      <Text style={styles.label}>Cotação na moeda de destino</Text>
      <TextInput
        style={styles.input}
        value={cotacaoMoedaDestino}
        onChangeText={setCotacaoMoedaDestino}
        keyboardType="numeric" // Teclado numérico para entrada de valores
      />

      {/* Campo para exibir a quantia na moeda de destino */}
      <Text style={styles.label}>Quantia na moeda de destino</Text>
      <Text style={styles.result}>{calcularQuantiaDestino()}</Text>
    </View>
  );
};

export default Cotacao;
