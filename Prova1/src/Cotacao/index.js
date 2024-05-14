import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

// Criando o componente Cotacao
const Cotacao = () => {
  const [state, setState] = useState({
    moedaOrigem: '',
    cotMoedaDestino: '',
    total: ''
  });

  // Criando as variáveis de estado somente-leitura
  // usando desestruturação
  const { moedaOrigem, cotMoedaDestino, total } = state;

  // Aqui tenho as funções de manipulação de eventos usando o formato arrow function
  const handleMoedaOrigemChangeText = text => setState({ ...state, moedaOrigem: text });
  const handleCotMoedaDestinoChangeText = text => setState({ ...state, cotMoedaDestino: text });

  //utilizo o UseEffect para poder calucalr, atualizar e renderizar em tempo real a cada mudança nos componentes 
  useEffect(() => {
    calcularTotal();
  }, [moedaOrigem, cotMoedaDestino]);

  //funcao que divide o valor total origem pelo valor da cotacao e retorna na variavel total o valor de cotacao
  const calcularTotal = () => {
    if (moedaOrigem && cotMoedaDestino) {
      const result = Number(moedaOrigem) / Number(cotMoedaDestino);
      setState({ ...state, total: result.toFixed(2) });
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.componenteA}>Conversor de moedas</Text> 
      <View>
        <Text style={styles.componenteBDF}>Quantia na moeda de origem</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleMoedaOrigemChangeText}
          value={moedaOrigem}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.componenteBDF}>Cotação na moeda de destino</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleCotMoedaDestinoChangeText}
          value={cotMoedaDestino}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.componenteBDF}>Quantia na moeda de destino</Text>
        <Text style={styles.componenteG}>{total}</Text>
      </View>
    </View>
  );
};

export default Cotacao;
