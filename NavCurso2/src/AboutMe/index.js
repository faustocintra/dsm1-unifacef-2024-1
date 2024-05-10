import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles"; // Certifique-se de que o nome do arquivo de estilo está correto
import foto from "../../assets/robs.jpeg";

export default function AboutMe({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>
      <Image
        source={foto}
        style={styles.photo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome: Roberto Papacidero</Text>
        <Text style={styles.infoText}>Telefone: 16 99418-2918</Text>
        <Text style={styles.infoText}>E-mail: robertopapacidero@gmail.com</Text>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.textButton}>Voltar</Text>
        </View>
      </Pressable>
    </View>
  );
}
