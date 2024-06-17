import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";

const Cotacao = () => {
    
  //Variáveis de estado para armazenar a quantidade de origem, a cotação e o resultado
  const [qtdOrigem, setQtdOrigem] = useState(0);
  const [cotacao, setCotacao] = useState(0);
  const [resultado, setResultado] = useState(0);

  //Função para calcular o resultado
  function calcular() {
    setResultado(qtdOrigem / cotacao);
  }

  //Efeito para chamar a função de calcular sempre que a quantidade de origem ou a cotação mudar
  useEffect(() => {
    calcular();
  }, [qtdOrigem, cotacao]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de moedas</Text>
      <Text style={styles.inputText}>Quantia na moeda de origem:</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChange={(e) => setQtdOrigem(e.target.value)} />
      <Text style={styles.inputText}>Cotação na moeda de destino:</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChange={(e) => setCotacao(e.target.value)} />
      <Text style={styles.inputText}>Quantia na moeda de destino:</Text>
      <Text style={styles.result}>{resultado > 0 ? resultado.toFixed(2) : 0}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  title: {
    fontSize: 25,
    color: "#36454F",
  },
  inputText: {
    fontStyle: "italic",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  result: {
    fontWeight: "bold",
  },
});

export default Cotacao;
