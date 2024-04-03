import { Button, TextInput, View } from "react-native";
import styles from "./styles";
import { React } from "react";

export default function Form() {
  const [state, setState] = React.useState({
    base: "",
    altura: "",
    tipo: "",
  });
  const [base, altura, tipo] = state;

  const handleBaseTextChange = (text) => setState({ ...state, base: text });
  const handleAlturaTextChange = (text) => setState({ ...state, altura: text });
  function handleTipoTextChange(text) {
    setState({ ...state, tipo: text });
  }
  function handleButtonPress() {}

  return (
    <View>
      <Text>Calculadora de area</Text>
      <View style={styles.horizontal}>
        <Text style={styles.textInput} onChangeText={handleBaseTextChange}>
          Base
        </Text>
        <TextInput />
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.textInput} onChangeText={handleAlturaTextChange}>
          Altura
        </Text>
        <TextInput />
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.textInput} onChangeText={handleTipoTextChange}>
          Tipo (R, T ou E)
        </Text>
        <TextInput />
      </View>
      <View style={styles.horizontal}>
        <Button title="Calcular" />
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.textInput}>Area: </Text>
      </View>
    </View>
  );
}
