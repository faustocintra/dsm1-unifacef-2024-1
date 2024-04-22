import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles'; // Importe os estilos do arquivo styles.js

const EquacaoSegundoGrau = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);

  const calcularDelta = () => {
    const deltaValue = (b ** 2) - 4 * a * c;
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

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Coeficiente a"
          keyboardType="numeric"
          value={a}
          onChangeText={text => setA(parseFloat(text))}
        />
      </View>
      <View>
        <TextInput
          placeholder="Coeficiente b"
          keyboardType="numeric"
          value={b}
          onChangeText={text => setB(parseFloat(text))}
        />
      </View>
        <TextInput
          placeholder="Coeficiente c"
          keyboardType="numeric"
          value={c}
          onChangeText={text => setC(parseFloat(text))}
        />
      <Button title="Calcular Delta" onPress={calcularDelta} />
      {/* Aplicando o estilo ao componente de texto */}
      <Text style={styles.name}>Delta: {delta}</Text>
      {/* Restante do código... */}
    </View>
  );
};

export default EquacaoSegundoGrau;
