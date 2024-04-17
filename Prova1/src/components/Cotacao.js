import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

// Define o componente Cotacao que é exportado como padrão do módulo
export default function Cotacao() {
  const [valorInicial, setValorInicial] = useState(''); // Estado para armazenar a quantidade de moeda de origem
  const [taxaConversao, setTaxaConversao] = useState(''); // Estado para armazenar a cotação da moeda de destino
  const [valorConvertido, setValorConvertido] = useState('');  // Estado para armazenar e exibir o valor convertido na moeda de destino

  // Hook useEffect que monitora mudanças em valorInicial e taxaConversao
  useEffect(() => {
    calcularValorConvertido(); // Chama a função de conversão sempre que os valores mudam
  }, [valorInicial, taxaConversao]);

  // Função que calcula o valor na moeda de destino com base nos valores de origem e cotação
  const calcularValorConvertido = () => {
    if (parseFloat(taxaConversao) !== 0) {
      const resultado = parseFloat(valorInicial) / parseFloat(taxaConversao);
      setValorConvertido(resultado.toFixed(2).toString()); // Define o resultado formatado com duas casas decimais como novo estado do valorConvertido
    } else {
      setValorConvertido("A taxa de conversão não pode ser zero."); // Caso a taxa de conversão seja zero, informa ao usuário através do estado valorConvertido
    }
  };

  // Retorna a estrutura visual do componente usando JSX
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de moedas</Text>
      <Text style={styles.italicText}>Quantidade de moeda de origem</Text>
      <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={valorInicial}
          onChangeText={setValorInicial}
          placeholder="Informe a quantidade"
      />
      <Text style={styles.italicText}>Cotação na moeda de destino</Text>
      <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={taxaConversao}
          onChangeText={setTaxaConversao}
          placeholder="Informe a cotação"
      />
      <Text style={styles.italicText}>Quantidade de moeda de destino</Text>
      <Text style={styles.boldText}>{valorConvertido}</Text>
    </View>
  );
}


