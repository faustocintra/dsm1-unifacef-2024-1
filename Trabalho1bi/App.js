// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './src/Trabalho/styles';

const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);

  const calculateDelta = () => {
    const deltaValue = b ** 2 - 4 * a * c;
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
      <Text>Informe os coeficientes da equação do segundo grau:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Coeficiente a"
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(parseFloat(text))}
        />      
      <TextInput
        style={styles.input}
        placeholder="Coeficiente b"
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(parseFloat(text))}
       />
      <TextInput
        style={styles.input}
        placeholder="Coeficiente c"
        keyboardType="numeric"
        value={c}
        onChangeText={text => setC(parseFloat(text))}
       />
      <Button title="Calcular Delta" onPress={calculateDelta} />
      {delta !== null && (
        <View style={styles.resultContainer}>
          <Text>Delta: {delta}</Text>
          {delta >= 0 && (
            <View>
              <Text>X1: {x1}</Text>
              <Text>X2: {x2}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default App;
