import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import styles from './styles';

export default function Equacao() {
  // Define o estado inicial com os coeficientes e o resultado
  const [state, setState] = React.useState({
    a: '',
    b: '',
    c: '',
    res: ''
  });

  // Funções para atualizar os coeficientes conforme o usuário digita
  const handleAChangeText = text => setState({...state, a: text});
  const handleBChangeText = text => setState({...state, b: text});
  const handleCChangeText = text => setState({...state, c: text});

  // Função para calcular as raízes da equação
  function handleButtonPress() {
    const { a, b, c } = state;
    let res = '';

    // Calcula o delta da equação
    const delta = (b ** 2) - (4 * a * c);

    // Verifica se o delta é negativo
    if(delta < 0){
        // Se for negativo, não existem raízes reais
        res  = 'Não existem raízes reais para a equação de segundo grau';
    } else {
        // Calcula as raízes usando a fórmula de Bhaskara
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        // Formata o resultado com duas casas decimais
        res = `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`
    }
    // Atualiza o estado com o resultado calculado
    setState({...state, res: res})
  }

  // Desestrutura o estado para obter o resultado
  const { res } = state;

  return (
    <View style={styles.container}>
      <Text>Calculadora de equação do 2º grau</Text>
      <View style={styles.inputContainer}>
        <Text>Insira A:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleAChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Insira B:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleBChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Insira C:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={handleCChangeText}
          inputMode="decimal"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        {/* Botão para calcular as raízes */}
        <Button title="Calcular" onPress={handleButtonPress} />
      </View>
      <View style={styles.inputContainer}>
        {/* Exibe o resultado */}
        <Text>Resultado: {res}</Text>
      </View>
    </View>
  );
}
