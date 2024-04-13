import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styles from "./styles";

export default function EquacaoSegundoGrau() {
  const [state, setState] = React.useState({
    a: "",
    b: "",
    c: "",
    delta: null,
    x1: null,
    x2: null,
    deltaNegativo: false,
  });

  const { a, b, c, delta, x1, x2, deltaNegativo } = state;

  const handleAChangeText = (text) => setState({ ...state, a: text });
  const handleBChangeText = (text) => setState({ ...state, b: text });
  const handleCChangeText = (text) => setState({ ...state, c: text });

  const handleClick = () => {
    Keyboard.dismiss(); // fechei o teclado para não atrapalhar a visualização dos resultados
    const valorA = Number(a);
    const valorB = Number(b);
    const valorC = Number(c);

    const delta = Math.pow(valorB, 2) - 4 * valorA * valorC;

    if (delta >= 0) {
      const valorX1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
      const valorX2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
      setState({
        ...state,
        delta: delta,
        x1: valorX1,
        x2: valorX2,
        deltaNegativo: false,
      });
    } else {
      setState({
        ...state,
        delta: delta,
        x1: null,
        x2: null,
        deltaNegativo: true,
      });
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.title}>Calculadora de equações de 2 grau</Text>
      <View style={styles.horizontal}>
        <Text>Valor A</Text>
        <TextInput
          placeholder="A"
          style={styles.textInput}
          onChangeText={handleAChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Valor B</Text>
        <TextInput
          placeholder="B"
          style={styles.textInput}
          onChangeText={handleBChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.horizontal}>
        <Text>Valor C</Text>
        <TextInput
          placeholder="C"
          style={styles.textInput}
          onChangeText={handleCChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontal}>
        {deltaNegativo ? (
          <Text style={styles.error}>
            Delta é negativo, não há raízes válidas.
          </Text>
        ) : null}
      </View>
      {x1 !== null && x2 !== null && !deltaNegativo ? (
        <>
          <View>
            <Text style={styles.raizes}>Delta: {delta}</Text>
          </View>
          <View>
            <Text style={styles.raizes}>X1 = {x1.toFixed(2)}</Text>
          </View>
          <View>
            <Text style={styles.raizes}>X2 = {x2.toFixed(2)}</Text>
          </View>
        </>
      ) : null}
    </View>
  );
}
