import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={"../../assets/sobrecurso.jpeg"} style={styles.image} />
      <Text>Sistemas de Informação</Text>
      <Button title="Voltar" onPress={() => navigation.navigate("Meu App")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
