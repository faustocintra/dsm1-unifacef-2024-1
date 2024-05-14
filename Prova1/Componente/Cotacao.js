import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'; // Import Keyboard

const Cotacao = () => { // utilização do hook useState para armazenar os valores dos inputs
  const [quantidadeOrigem, setQuantidadeOrigem] = useState('');
  const [cotacaoDestino, setCotacaoDestino] = useState('');
  const [quantidadeDestino, setQuantidadeDestino] = useState('');

  const calcularQuantidadeDestino = () => { // função para calcular a quantidade na moeda de destino
    if (!isNaN(parseFloat(quantidadeOrigem)) && !isNaN(parseFloat(cotacaoDestino))) {
      const quantidadeDestinoCalculada = parseFloat(quantidadeOrigem) / parseFloat(cotacaoDestino);
      setQuantidadeDestino(quantidadeDestinoCalculada.toFixed(2).toString());
    } else {
      setQuantidadeDestino('');
    }
  };

  return ( // renderização dos elementos na tela
    <View style={styles.container}>
      <Text style={[styles.texto, {fontSize: 25, color: '#FF5733'}]}>Conversor de moedas</Text>
      <Text style={[styles.texto, {fontStyle: 'italic'}]}>Quantidade na moeda de origem</Text>
      <TextInput // input para inserir a quantidade na moeda de origem
        style={styles.input}
        value={quantidadeOrigem}
        onChangeText={setQuantidadeOrigem}
        keyboardType="numeric"
        placeholder="Insira a quantidade"
        onSubmitEditing={Keyboard.dismiss} // Add this line
      />
      <Text style={[styles.texto, {fontStyle: 'italic'}]}>Cotação na moeda de destino</Text>
      <TextInput
        style={styles.input}
        value={cotacaoDestino}
        onChangeText={(text) => { setCotacaoDestino(text); calcularQuantidadeDestino(); }}
        keyboardType="numeric"
        placeholder="Insira a cotação"
        onSubmitEditing={Keyboard.dismiss} // Add this line
      />
      <Text style={[styles.texto, {fontStyle: 'italic'}]}>Quantidade na moeda de destino</Text>
      <Text style={[styles.texto, {fontWeight: 'bold'}]}>{quantidadeDestino}</Text>
    </View>
  );
};
// estilização dos elementos
const styles = StyleSheet.create({ 
  container: { 
    backgroundColor: '#F0F0F0',
    padding: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default Cotacao;