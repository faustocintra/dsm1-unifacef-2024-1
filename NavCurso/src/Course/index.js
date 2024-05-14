import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Curso</Text>
      <Image
        source={require("../../assets/engenharia-de-software.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>Engenharia de Software</Text>
      <Text style={styles.text}>Previsão de término: 31/12/2025</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}
