// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

//Criação das variáveis de estado para armazenar os valores e atualizar a tela quando necessário
const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);


  /*Criação da função para cálculo do valor de delta.
   b ** 2 - 4 * a * c. 
  Ela é chamada quando o usuário pressiona o botão de calcular. */
  
  const ResultaDelta = () => {
    const valorDelta = b ** 2 - 4 * a * c;
    setDelta(valorDelta);
/*Se o delta for menor que 0, 
o que indica a ausência de raízes reais, 
x1 e x2 serão nulos.*/
    if (valorDelta < 0) {
      setX1(null);
      setX2(null);
    } else {
      /* Se tiver raizes reais, é usada a fórmula de Bhaskara,
       com o Math.sqrt sobre o valor do delta.*/
      const x1Value = (-b + Math.sqrt(valorDelta)) / (2 * a);
      const x2Value = (-b - Math.sqrt(valorDelta)) / (2 * a);
      setX1(x1Value);
      setX2(x2Value);
    }
  };
/*Definição dos campos de entrada (TextInput) para que o usuário insira os valores de a, b e c. */ 
/*Definição do botão que chama a funçaõ que realiza o cálculo. */ 
  return (
    <View style={styles.container}>
      <Text>Informe os coeficientes da equação do segundo grau:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Valor de a"
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(parseFloat(text))}
        />      
      <TextInput
        style={styles.input}
        placeholder="Valor de b"
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(parseFloat(text))}
       />
      <TextInput
        style={styles.input}
        placeholder="Valor de c"
        keyboardType="numeric"
        value={c}
        onChangeText={text => setC(parseFloat(text))}
       />       
      <Button title="Calcular" onPress={ResultaDelta} style={styles.botao} />
      {delta !== null && (
        <View style={styles.resultContainer}>
          <Text>Delta= {delta}</Text>
          {delta >= 0 && (
            <View>
              <Text>X1= {x1}</Text>
              <Text>X2= {x2}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default App;
