import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function Cotacao() {
  // Definindo as variaveis de estado
  const [state, setState] = useState({
    valorOrigem: "",
    cotacaoDestino: "",
    valorCotado: null,
  });

  const { valorOrigem, cotacaoDestino, valorCotado } = state;

  useEffect(() => {
    //Transformando os valores em numeros
    const origem = Number(valorOrigem);
    const destino = Number(cotacaoDestino);

    //Verifico se o valor a dividir nao e 0, para nao dar erro de divisao por 0
    if (destino !== 0) {
      //conta da cotacao e definicao do estado

      const cotado = origem / destino;
      setState({
        ...state,
        valorCotado: cotado,
      });
    } else {
      setState({
        ...state,
        valorCotado: null,
      });
    }
  }, [valorOrigem, cotacaoDestino]);
  /* Usei os parametros valor origem e cotacao destino para que cada vez
  que forem alterados, o calculo seja refeito*/

  //Funcao para pegar os valores digitados
  const handleValorOrigemChangeText = (text) =>
    setState({ ...state, valorOrigem: text });
  const handleCotacaoDestinoChangeText = (text) =>
    setState({ ...state, cotacaoDestino: text });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de moedas</Text>
      <View style={styles.horizontal}>
        <Text style={styles.label}>Quantia na moeda de origem</Text>
        {/*Input valor moeda origem*/}
        <TextInput
          placeholder="Valor Origem"
          style={styles.textInput}
          onChangeText={handleValorOrigemChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.label}>Cotação na moeda destino</Text>
        {/*Input valor moeda destino*/}
        <TextInput
          placeholder="Cotacao Destino"
          style={styles.textInput}
          onChangeText={handleCotacaoDestinoChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <View style={styles.divider} />
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.label}>Quantia na moeda destino</Text>
      </View>
      {/* Verifico se o valor nao e nulo ou NaN, para nao aparecer a label equivocadamente */}
      {valorCotado !== null && !isNaN(valorCotado) ? (
        <View style={styles.horizontal}>
          <Text style={styles.result}>{valorCotado.toFixed(2)}</Text>
        </View>
      ) : null}
    </View>
  );
}
