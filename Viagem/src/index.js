import React from "react";
import { Text, View, StyleSheet} from "react-native";


export default function Abastecimento({ distancia, etanol, gasolina }) {
  const eficienciaEtanol = 9;
  const eficienciaGasolina = 11;

  const valorGastoEtanol = (distancia / eficienciaEtanol) * etanol;
  const valorGastoGasolina = (distancia / eficienciaGasolina) * gasolina;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Distancia {distancia}</Text>
      {valorGastoEtanol < valorGastoGasolina ? (
        <View style={styles.verde}>
          <Text>
            Valor gasto com etanol: {valorGastoEtanol.toFixed(1)}
          </Text>
        </View>
      ) : (
        <View style={styles.laranja}>
          <Text>
            Valor gasto com gasolina: {valorGastoGasolina.toFixed(1)}
          </Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  verde: {
    backgroundColor: '#5C871D',
  },
  laranja: {
    backgroundColor: '#fb7105'
  }
});
