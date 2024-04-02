import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";

export default function Form() {
  const [state, setState] = React.useState({
    base: "",
    altura: "",
    tipo: "",
  });

  // Criando as variáveis de estado somente-leitura
  // usando desestruturação
  const { base, altura, tipo } = state;

  // Funções de manipulação de eventos usando o formato arrow function
  const handleBaseTextChange = (text) => setState({ ...state, base: text });
  const handleAlturaTextChange = (text) => setState({ ...state, altura: text });

  // Função de manipulação de eventos usando o formato tradicional
  function handleTipoTextChange(text) {
    setState({ ...state, tipo: text });
  }
  function handleButtonPress() {}
  return (
    <View>
      <Text>Calculadora de área para formas geometricas planas</Text>
      <View style={styles.horizontal}>
        <Text>Base</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleBaseTextChange}
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Altura</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleAlturaTextChange}
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Tipo </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTipoTextChange}
        />
      </View>
      <View>
        <Button title="Calcular" onPress={handleButtonPress} />
      </View>
      <View style={styles.horizontal}>
        <Text>Área: </Text>
        <Text>Estado: {JSON.stringify(state)}</Text>
      </View>
    </View>
  );
}
