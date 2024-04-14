// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './src/Trabalho/styles';

//criei as variaveis de estado com cada componente que iria utilizar no aplicativo
//Usei essas variáveis de estado para rastrear os valores e atualizar a interface 
// do usuário quando necessário, utilizando as funções set correspondentes.
const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);


  /*Em seguida, criei a função calculateDelta. 
  Nela, apliquei a fórmula para calcular o delta, 
  que é b ** 2 - 4 * a * c. 
  Esta função é acionada quando o usuário pressiona o botão de cálculo. */
  
  const calculateDelta = () => {
    const deltaValue = b ** 2 - 4 * a * c;
    setDelta(deltaValue);
/*Se o delta resultante for menor que 0, 
o que indica a ausência de raízes reais, 
eu defino x1 e x2 como nulos.*/
    if (deltaValue < 0) {
      setX1(null);
      setX2(null);
    } else {
      /* Caso contrário, recalculo as raízes utilizando a fórmula de Bhaskara,
       onde aplico Math.sqrt sobre o valor do delta.*/
      const x1Value = (-b + Math.sqrt(deltaValue)) / (2 * a);
      const x2Value = (-b - Math.sqrt(deltaValue)) / (2 * a);
      setX1(x1Value);
      setX2(x2Value);
    }
  };
/*Na interface do usuário, 
adicionei campos de entrada (TextInput) para que o usuário inserisse os coeficientes a, b e c. */ 
/*Além disso, adicionei um botão que chama a função calculateDelta quando pressionado. 
 Os resultados são exibidos abaixo dos campos de entrada.*/ 
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
