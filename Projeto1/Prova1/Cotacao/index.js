import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles"; // Importa os estilos do arquivo styles.js

const Cotacao = () => {
  // Define os estados para armazenar a quantia na moeda de origem e a cotação na moeda de destino
  const [quantiaOrigem, setQuantiaOrigem] = useState("");
  const [cotacaoDestino, setCotacaoDestino] = useState("");

  // Função que realiza o cálculo e da quantia na moeda de destino
  const calcularQuantiaDestino = () => {
    // converte as entradas para números
    const quantiaOrigemNum = parseFloat(quantiaOrigem);
    const cotacaoDestinoNum = parseFloat(cotacaoDestino);

    // Verifica se as entradas são números válidos
    if (!isNaN(quantiaOrigemNum) && !isNaN(cotacaoDestinoNum)) {
      // Realiza o cálculo e formata o resultado para duas casas decimais
      return (quantiaOrigemNum / cotacaoDestinoNum).toFixed(2);
    } else {
      // Retorna uma vazio se os números de entrada não for válidos
      return "";
    }
  };

  // retrona o componente
  return (  
    <View style={styles.container}>
      {/* Título */}
      <Text style={[styles.text, styles.header]}>Conversor de moedas</Text>
      {/* campo de entrada para a quantia na moeda de origem */}
      <Text style={[styles.text, styles.italic]}>
        Quantia na moeda de origem
      </Text>
      <TextInput
        style={styles.input}
        value={quantiaOrigem}
        onChangeText={(text) => setQuantiaOrigem(text)}
        keyboardType="numeric"
    />

      {/* campo para a cotação da moeda de destino */}
      <Text style={[styles.text, styles.italic]}>
        Cotação na moeda de destino
      </Text>
      <TextInput
        style={styles.input}
        value={cotacaoDestino}
        onChangeText={(text) => setCotacaoDestino(text)}
        keyboardType="numeric"
      />

      {/* exibe a quantia na moeda de destino */}
      <Text style={[styles.text, styles.italic]}>
        Quantia na moeda de destino
      </Text>
      <Text style={[styles.text, styles.bold]}>
        {/* Chama a função e exibe o resultado */}
        {calcularQuantiaDestino()}
      </Text>
    </View>
  );
};

export default Cotacao;
