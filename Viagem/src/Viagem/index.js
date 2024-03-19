import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Viagem = ({ viagem, distancia, pGasolina, pEtanol }) => {
  const mediaG = ((distancia / 11) * pGasolina).toFixed(2);
  const mediaE = ((distancia / 9) * pEtanol).toFixed(2);

  let corBackground;
  let resultado;

  if (parseFloat(mediaG) < parseFloat(mediaE)) {
    corBackground = '#ffa500'; // Laranja
    resultado = `Preço com Gasolina: ${mediaG}`;
  } else {
    corBackground = '#9ACD32'; // Verde
    resultado = `Preço com Etanol: ${mediaE}`;
  }

  return (
    <View style={{ ...styles.viagem, backgroundColor: corBackground }}>
      <View style={styles.viagemContainer}>
        <Text style={styles.nome}>Viagem para: {viagem}</Text>
      </View>
      <Text style={styles.viagemText}>Distância: {distancia}</Text>
      <Text style={styles.viagemText}>Valor gasolina: {pGasolina}</Text>
      <Text style={styles.viagemText}>Valor etanol: {pEtanol}</Text>
      <Text style={styles.viagemText}>{resultado}</Text>
    </View>
  );
};

export default Viagem;