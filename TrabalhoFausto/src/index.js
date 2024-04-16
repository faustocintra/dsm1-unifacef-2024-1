import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from "react-native";

// Função principal do componente
export default function Calcula() {

  // Declaração de estados para armazenar os valores A, B e C
  const [NumA, setNumA] = React.useState("");
  const [NumB, setNumB] = React.useState("");
  const [NumC, setNumC] = React.useState("");

  // Função para calcular usando a fórmula de Bhaskara
  function Bhaskara(a, b, c) {

    // Converte os valores passados para números
    a = Number(a);
    b = Number(b);
    c = Number(c);

    // Verifica se A é diferente de zero
    if (a === 0) {
      clearFields(); // Limpa os campos se A for zero
      throw new Error("O valor de A deve ser diferente de zero."); 
    }

    // Calcula o delta
    const delta = Math.pow(b, 2) - 4 * a * c;

    // Verifica se o delta é negativo (não possui raízes reais)
    if (delta < 0) {
      clearFields(); // Limpa os campos
      throw new Error("A equação não tem raízes reais."); 
    }

    // Calcula as raízes x1 e x2
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Limpa os campos
    clearFields();

    // Retorna um objeto com as raízes x1 e x2
    return { x1, x2 };
  }

  // Função para limpar os campos de input
  function clearFields() {
    setNumA("");
    setNumB("");
    setNumC("");
  }

  // Renderiza a interface do componente
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bhaskara</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          // Permite apenas números e o sinal negativo
          if (/^-?\d*$/.test(text)) {
            setNumA(text);
          } else {
            alert("Por favor, insira apenas números.");
          }
        }}
        value={NumA}
        placeholder="Valor de A"
      />


      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          // Permite apenas números e o sinal negativo
          if (/^-?\d*$/.test(text)) {
            setNumB(text);
          } else {
            alert("Por favor, insira apenas números.");
          }
        }}
        value={NumB}
        placeholder="Valor de B"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          // Permite apenas números e o sinal negativo
          if (/^-?\d*$/.test(text)) {
            setNumC(text);
          } else {
            alert("Por favor, insira apenas números.");
          }
        }}
        value={NumC}
        placeholder="Valor de C"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          try {
            // Tenta executar a função Bhaskara
            const { x1, x2 } = Bhaskara(NumA, NumB, NumC);
            Alert.alert("Resultado", `x1 = ${x1} \n x2 = ${x2}`); // Exibe o resultado
          } catch (error) {
            // Captura erros da função Bhaskara
            Alert.alert("Erro", error.message); // Exibe mensagem de erro
          }
        }}
      >
        <Text style={{ color: "white" }}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
});