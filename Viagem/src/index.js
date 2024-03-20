import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Viagem = ({ distancia, precoEtanol, precoGasolina }) => {
  const consumoEtanol = 9;
  const consumoGasolina = 11;
  const litrosEtanol = distancia / consumoEtanol;
  const litrosGasolina = distancia / consumoGasolina;
  const valorTotalEtanol = litrosEtanol * precoEtanol;
  const valorTotalGasolina = litrosGasolina * precoGasolina;

  const corComponente = valorTotalEtanol < valorTotalGasolina ? styles.verde : styles.laranja;

  return (
    <View style={[styles.container, corComponente]}>
      <Text style={styles.title}>Distância: {distancia} km</Text>
      <Text style={styles.text}>Preço do Etanol: R$ {precoEtanol.toFixed(2)}</Text>
      <Text style={styles.text}>Preço da Gasolina: R$ {precoGasolina.toFixed(2)}</Text>
      <Text style={styles.title}>Valor Gasto:</Text>
      <Text style={styles.text}>Com Etanol: R$ {valorTotalEtanol.toFixed(2)}</Text>
      <Text style={styles.text}>Com Gasolina: R$ {valorTotalGasolina.toFixed(2)}</Text>
    </View>
  );  
};

export default Viagem;