// Importando os módulos necessários do React, React Native e Lottie
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import LottieView from 'lottie-react-native';

// Definindo um componente funcional para os campos de entrada
const CampoEntrada = ({ valor, setValor, placeholder }) => (
  <TextInput
    style={styles.input} // Aplicando estilos ao campo de entrada
    onChangeText={texto => { // Função para lidar com a mudança de texto
      const numero = parseFloat(texto); // Convertendo o texto para um número
      if (isNaN(numero)) { // Verificando se o texto é um número
        alert('Por favor, insira um número'); // Alerta se o texto não for um número
      } else {
        setValor(numero); // Atualizando o estado se o texto for um número
      }
    }}
    value={String(valor)} // Convertendo o valor para uma string
    placeholder={placeholder} // Definindo o texto do placeholder
    keyboardType="numeric" // Definindo o tipo de teclado para numérico
  />
);

// Definindo o componente principal da aplicação
export default function App() {
  // Definindo o estado para os coeficientes e o resultado
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState('');

  // Função para calcular o delta
  const calcularDelta = () => {
    if (a === 0) { // Verificando se o coeficiente a é zero
      alert('O coeficiente a não pode ser zero'); // Alerta se o coeficiente a for zero
      return;
    }
    const delta = Math.pow(b, 2) - (4 * a * c); // Calculando o delta
    if (delta < 0) { // Verificando se o delta é negativo
      setResultado('Não há raízes reais para a equação de segundo grau.'); // Atualizando o resultado se o delta for negativo
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a); // Calculando a primeira raiz
      const x2 = (-b - Math.sqrt(delta)) / (2 * a); // Calculando a segunda raiz
      setResultado(`x1 = ${x1}, x2 = ${x2}`); // Atualizando o resultado com as raízes
    }
  };

  // Renderizando o componente
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> // Fechando o teclado quando tocar fora dos campos de entrada
      <View style={styles.container}> // Aplicando estilos ao container
        <Image source={require('./assets/logo.png')} /> // Renderizando a imagem do logo
        <CampoEntrada valor={a} setValor={setA} placeholder="Coeficiente a" /> // Renderizando o campo de entrada para o coeficiente a
        <CampoEntrada valor={b} setValor={setB} placeholder="Coeficiente b" /> // Renderizando o campo de entrada para o coeficiente b
        <CampoEntrada valor={c} setValor={setC} placeholder="Coeficiente c" /> // Renderizando o campo de entrada para o coeficiente c
        <Button title="Calcular Delta" onPress={calcularDelta} /> // Renderizando o botão para calcular o delta
        <Text style={styles.resultado}>{resultado}</Text> // Renderizando o resultado
        <LottieView
          source={require("./assets/animation.json")} // Renderizando a animação
          style={{width: "40%", height: "40%"}} // Aplicando estilos à animação
          autoPlay // Fazendo a animação tocar automaticamente
          loop // Fazendo a animação repetir em loop
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

// Definindo os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});