import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles"; // Certifique-se de que o nome do arquivo de estilo está correto
import foto from "../../assets/UNIFACEF.png";

export default function AboutMe({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSTITUIÇÃO</Text>
      <Image
        source={foto}
        style={styles.photo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Uni-facef</Text>
        <Text style={styles.infoText}>Telefone: 3713-4688</Text>
        <Text style={styles.infoText}>E-mail: daniel@facef.br</Text>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.textButton}>Voltar</Text>
        </View>
      </Pressable>
    </View>
  );
}
