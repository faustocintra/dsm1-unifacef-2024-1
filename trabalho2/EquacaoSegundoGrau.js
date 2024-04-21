import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Aqui vai ser onde teremos a definição do delta e raizes
const EquacaoSegundoGrau = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [raizA, setRaizA] = useState(null);
  const [raizB, setRaizB] = useState(null);




// Seguindo temos a função do delta
  const calcularDelta = () => {
    const NumeroA = parseFloat(a);
    const NumeroB = parseFloat(b);
    const NumeroC = parseFloat(c);




    // Calcular o delta 
    const DeltaR = Math.pow(NumeroB, 2) - 4 * NumeroA * NumeroC;
    setDelta(DeltaR);



    // verifica se tem raiz
    if (DeltaR >= 0) {
        const x1 = (-NumeroB + Math.sqrt(DeltaR)) / (2 * NumeroA);
        const x2 = (-NumeroB - Math.sqrt(DeltaR)) / (2 * NumeroA);
        setRaizA(x1);
        setRaizB(x2);
    } else { // vai calcular as raizes utilizando a formula 
      setRaizA(null);
      setRaizB(null);
    }
  };

  // Aqui é onde irá aparecer o 'formulario' pedindo os valores, e o botão para relizar a ação'
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.inputText}>Adicione o número A</Text>
        <TextInput
          style={styles.input}
          placeholder="Numero A"
          keyboardType="numeric"
          onChangeText={text => setA(text)}
          value={a}
        />
        <Text style={styles.inputText}>Adicione o número B</Text>
        <TextInput
          style={styles.input}
          placeholder="Numero B"
          keyboardType="numeric"
          onChangeText={text => setB(text)}
          value={b}
        />
        <Text style={styles.inputText}>Adicione o número C</Text>
        <TextInput
          style={styles.input}
          placeholder="Numero C"
          keyboardType="numeric"
          onChangeText={text => setC(text)}
          value={c}
        />
        <Button title="Calcular" onPress={calcularDelta} />
        {delta !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Os resultados são:</Text>
            {delta < 0 ? (
              <Text style={styles.errorText}>Não há raízes reais para a equação do segundo grau.</Text>
            ) : (
              <View>
                <Text style={styles.resultText}>O valor de Delta e suas raizes são: </Text>
                <Text style={styles.resultText}>delta: {delta}</Text>
                <Text style={styles.resultText}>x1: {raizA}</Text>
                <Text style={styles.resultText}>x2: {raizB}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};



// Apenas o estilo do codigo
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC9DEF5',
    padding: 20,
    borderRadius: '5%',
  },
  formContainer: {
    backgroundColor: '#FFC9DEF5',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#black',
  },
  inputText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#',
  },
  resultContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
});

export default EquacaoSegundoGrau;
