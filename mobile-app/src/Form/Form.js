// Importa os pacotes necessários
import React from "react";
import { View, Text, TextInput, Button} from "react-native";
import { useState } from "react";
import styles from "./FormStyles";

// Cria o componente
const Form = ({}) => {
  // Cria estados para armazenar valores 
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [c, setC] = React.useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);

// Função para calcular o valor de delta e das raízes 
  const calcularDelta = () => {
    const deltaValue = Math.pow(b, 2) - 4 * a * c;
    setDelta(deltaValue);
    if (deltaValue < 0) {
      setX1(null);
      setX2(null);
    } else {
      const x1Value = (-b + Math.sqrt(deltaValue)) / (2 * a);
      const x2Value = (-b - Math.sqrt(deltaValue)) / (2 * a);
      setX1(x1Value);
      setX2(x2Value);
    }
  };

  // Renderiza as os textos e inputs do formulario
  return (
    <View style={styles.formContainer}>
      <Text>Valor A:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(parseFloat(text))}
      />
      <Text>Valor B:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(parseFloat(text))}
      />
      <Text>Valor C:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={c}
        onChangeText={text => setC(parseFloat(text))}
      />
      <Button style={styles.btn} title="Calcular" onPress={calcularDelta} />
      // Mostra o resultado do calculo
      {delta !== null && (
        <Text style={styles.result}>
          Delta: {delta}
        </Text>
      )}
      {delta !== null && delta < 0 && (
        <Text style={styles.result}>
          Não há raízes válidas para a equação do 2º grau.
        </Text>
      )}
      {delta !== null && delta >= 0 && (
        <View>
          <Text style={styles.result}>
            x1: {x1}
          </Text>
          <Text style={styles.result}>
            x2: {x2}
          </Text>
        </View>
      )}
    </View>
  );
};

// Exporta o componente
export default Form;