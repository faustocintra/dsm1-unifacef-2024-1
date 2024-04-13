import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from "react-native";

export default function Calculadora() {
  
  // Variaveis de estado para os valores de A, B e C
  const [valueA, setValueA] = React.useState("");
  const [valueB, setValueB] = React.useState("");
  const [valueC, setValueC] = React.useState("");

  // Função para calcular as raízes da equação de Bhaskara
  function calculateBhaskara(a, b, c) {

    // Converte os valores para números
    a = Number(a);
    b = Number(b);
    c = Number(c);

    // Verifica se o valor de A é zero
    if (a === 0) {
      clearFields();
      throw new Error("O valor de A deve ser diferente de zero.");
    }

    // Calcula o delta
    // Math.pow(base, expoente) calcula a base elevada ao expoente
    const delta = Math.pow(b, 2) - 4 * a * c;

    // Verifica se o delta é negativo
    if (delta < 0) {
      clearFields();
      throw new Error("A equação não tem raízes reais.");
    }

    // Calcula as raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Limpa os campos e retorna as raízes
    clearFields();
    return { x1, x2 };
  }

  // Função para limpar os campos
  function clearFields() {
    setValueA("");
    setValueB("");
    setValueC("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bhaskara</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          if (/^-?\d*$/.test(text)) {
            // Se o texto for um número (incluindo negativo), atualize o estado.
            setValueA(text);
          } else {
            // Se o texto não for um número, exiba um alerta e não atualize o estado.
            alert("Por favor, insira apenas números.");
          }
        }}
        value={valueA}
        placeholder="Valor de A"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          if (/^-?\d*$/.test(text)) {
            setValueB(text);
          } else {
            alert("Por favor, insira apenas números.");
          }
        }}
        value={valueB}
        placeholder="Valor de B"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          if (/^-?\d*$/.test(text)) {
            setValueC(text);
          } else {
            alert("Por favor, insira apenas números.");
          }
        }}
        value={valueC}
        placeholder="Valor de C"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Tenta calcular as raízes e exibir o resultado em um alerta
          try {
            const { x1, x2 } = calculateBhaskara(valueA, valueB, valueC);
            Alert.alert("Resultado", `x1 = ${x1} \n x2 = ${x2}`);
          } catch (error) {
            // Se houver um erro, exiba o erro em um alerta
            Alert.alert("Erro", error.message);
          }
        }}
      >
        <Text style={{ color: "white" }}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#344f8a",
    padding: 10,
    borderRadius: 10,
    width: 200,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
});
