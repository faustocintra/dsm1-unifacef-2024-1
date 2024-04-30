//Ana Carolina Neias Ribeiro Vieira - 23987

//importando os arquivos
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { styles } from "./styles";

//Iniciando a função
export default function Prova1() {
  //Definindo o estado inicial dos componentes
  const [state, setState] = React.useState({
    quantiaOrigem: '',
    cotacaoDestino: '',
    quantiaDestino: '',
  });

  //Desestruturando o estado para acessar os valores de forma mais fácil
  const { quantiaOrigem, cotacaoDestino, quantiaDestino } = state;

  //Manipulação para receber e retornar as entradas de texto
  const handleQtOrigemTextChange = (text) => setState({ ...state, quantiaOrigem: text });
  const handleQtDestinoTextChange = (text) => setState({ ...state, cotacaoDestino: text });

  //Função para calcular a quantia
  const calcularQuantiaDestino = () => {
    //Convertendo os valores para números
    const quantiaOrigemNum = parseFloat(quantiaOrigem);
    const cotacaoDestinoNum = parseFloat(cotacaoDestino);

    //Conta de divisão da qtdeDestino / pelo valor da cotação
    const quantiaDestinoCalculada = quantiaOrigemNum / cotacaoDestinoNum;
    //Atualizando o valor da quantia de destino
    setState({ ...state, quantiaDestino: quantiaDestinoCalculada });
  };

  //Retornando a Visualização dos componentes
  return (
    <View style={styles.container}>
      <Text style={styles.textTitulo}>Conversor de moedas</Text>
      <Text style={styles.textItalico}>Quantia na moeda de origem</Text>
      <TextInput
        onChangeText={handleQtOrigemTextChange} //Entrada de texto da quantia origem
        keyboardType="numeric"
        placeholder="Digite a quantia da moeda de origem"
      />
      <Text style={styles.textItalico}>Cotação na moeda de destino</Text>
      <TextInput
        onChangeText={handleQtDestinoTextChange} //Entrada de texto da quantia destino
        keyboardType="numeric"
        placeholder="Digite a cotação"
      />

      {/*Visualização da quantia de destino*/}
      <Text style={styles.textItalico}>Quantia na moeda de destino</Text>
      <Text style={styles.textNegrito}>{Q}</Text>
    </View>
  );
}
