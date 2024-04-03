import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Viagem = ({ distancia, precoEtanol, precoGasolina }) => {
  const consumoEtanol = 9; // km/l
  const consumoGasolina = 11; // km/l

  const gastoEtanol = (distancia / consumoEtanol) * precoEtanol;
  const gastoGasolina = (distancia / consumoGasolina) * precoGasolina;

  return (
    <View style={[styles.container, gastoEtanol < gastoGasolina ? styles.verde : styles.laranja]}>
      <Text style={styles.texto}>
        Distancia: {distancia}
      </Text>
      <Text style={styles.texto}>
        Preço Gasolina: {precoGasolina}
      </Text>
      <Text style={styles.texto}>
        Preço Etanol: {precoEtanol}
      </Text>
      <Text style={styles.texto}>
        Gasto com etanol: R$ {gastoEtanol.toFixed(2)}
      </Text>
      <Text style={styles.texto}>
        Gasto com gasolina: R$ {gastoGasolina.toFixed(2)}
      </Text>
    </View>
  );
};

export default Viagem;
