import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles"; // Certifique-se de que o nome do arquivo de estilo está correto
import foto from "../../assets/engenharia.jpeg";

export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CURSO</Text>
      <Image
        source={foto}
        style={styles.photo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Curso: Engenharia de Software</Text>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.textButton}>Voltar</Text>
        </View>
      </Pressable>
    </View>
  );
}
