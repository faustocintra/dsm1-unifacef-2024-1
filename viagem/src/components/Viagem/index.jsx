import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Viagem = ({ distancia, preco_etanol, preco_gasolina }) => {

  const [bgColor, setBgColor] = React.useState("");

  const custoEtanol = () => {
    let custo = (distancia / 9) * preco_etanol;
    return custo;
  };

  const custoGasolina = () => {
    let custo = (distancia / 12) * preco_gasolina;
    return custo;
  };

  React.useEffect(() => {
    if (custoEtanol() < custoGasolina()) {
      setBgColor("lightgreen");
    } else {
      setBgColor("lightorange");
    }
  }, []);


  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text>Distancia: {distancia}km</Text>
      <Text>Custo Etanol: R${parseFloat(custoEtanol()).toFixed(2)}</Text>
      <Text>Custo Gasolina: R${parseFloat(custoGasolina()).toFixed(2)}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    gap: 5,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
});

export default Viagem;
