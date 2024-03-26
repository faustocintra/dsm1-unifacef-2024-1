import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Viagem = ({ distancia, precoEtanol, precoGasolina }) => {
  const consumoEtanol = 9; 
  const valorEtanol = (distancia / consumoEtanol) * precoEtanol;

  const consumoGasolina = 11; 
  const valorGasolina = (distancia / consumoGasolina) * precoGasolina;
  const color = valorEtanol < valorGasolina ? 'green' : 'orange';

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.text}>Distância: {distancia} km</Text>
      <Text style={styles.text}>Preço do Etanol: R$ {precoEtanol.toFixed(2)}</Text>
      <Text style={styles.text}>Preço da Gasolina: R$ {precoGasolina.toFixed(2)}</Text>
      <Text style={styles.text}>Valor gasto com Etanol: R$ {valorEtanol.toFixed(2)}</Text>
      <Text style={styles.text}>Valor gasto com Gasolina: R$ {valorGasolina.toFixed(2)}</Text>
    </View>
  );
};

export default Viagem;
