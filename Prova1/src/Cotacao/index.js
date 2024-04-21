import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";

const Cotacao = () => {
  //variaveis para controlar os estados dos campos
  const [quantiaOrigem, setQuantiaOrigem] = useState("");
  const [cotação, setCotacao] = useState("");
  const [quantiaDestino, setQuantiaDestino] = useState("");

  // Função para calcular a quantia na moeda de destino
  const calcularQuantiaDestino = () => {
    //Validar antes se existe valor nos dois campos
    if (quantiaOrigem && cotação) {
      const resultado = parseFloat(quantiaOrigem) / parseFloat(cotação);
      setQuantiaDestino(resultado.toFixed(2)); //para deixar so duas casas apos a virgula
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Conversor de moedas</Text>

      <Text style={[styles.text, styles.italic]}>
        Quantia na moeda de origem
      </Text>
      <TextInput
        value={quantiaOrigem}
        onChangeText={
          setQuantiaOrigem
        } /* atualizar a variavel toda vez que digitar algo novo ou apagar */
        keyboardType="numeric" /* para o teclado no celular abrir somente o de numeros */
        style={styles.input}
        onBlur={calcularQuantiaDestino}
      />

      <Text style={[styles.text, styles.italic]}>
        Cotação na moeda de destino
      </Text>
      <TextInput
        value={cotação}
        onChangeText={
          setCotacao
        } /* atualizar a variavel toda vez que digitar algo novo ou apagar */
        keyboardType="numeric" /* para o teclado no celular abrir somente o de numeros */
        style={styles.input}
        onBlur={calcularQuantiaDestino}
      />
      {/* saida do dado resultado da funcao calcularQuantiaDestino() */}
      <Text style={[styles.text, styles.italic]}>
        Quantia na moeda de destino:{" "}
        <Text style={styles.bold}>{quantiaDestino}</Text>
      </Text>
    </View>
  );
};

export default Cotacao;
