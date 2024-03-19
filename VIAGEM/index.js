import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Viagem = ({ viagem, distancia, pGasolina, pEtanol }) => {
  const mediaG = ((distancia / 11) * pGasolina).toFixed(2);
  const mediaE = ((distancia / 9) * pEtanol).toFixed(2);

  let corTexto;
  let resultado;

  if (mediaG < mediaE) {
    corTexto = '#ffa500'; // Laranja
    resultado = `Preço com Gasolina: ${mediaG}`;
  } else {
    corTexto = '#008000'; // Verde
    resultado = `Preço com Etanol: ${mediaE}`;
  }

  return (
    <View style={styles.viagem}>
      <View style={styles.viagemContainer}>
        <Text style={styles.nome}>Viagem para: {viagem}</Text>
      </View>
      <Text style={styles.viagemText}>Distância: {distancia}</Text>
      <Text style={styles.viagemText}>Valor gasolina: {pGasolina}</Text>
      <Text style={styles.viagemText}>Valor etanol: {pEtanol}</Text>
      <Text style={{ ...styles.viagemText, color: corTexto }}>{resultado}</Text>
    </View>
  );
};

export default Viagem;

