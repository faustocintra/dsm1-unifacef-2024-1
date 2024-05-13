import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./style.js";
import { DefaultTheme } from "@react-navigation/native";
import { Image } from "expo-image";

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
    <Image
        style={styles.Image}
        source="../../assets/emoji-sorriso.jpg"
    />
      <Text>César Daniel Rodrigues</Text>
      <Text>992223521</Text>
      <Text>cesar.daniel.rodrigues@gmail.com</Text>

      <Button
        title="Voltar"
        onPress={() => navigation.navigate("Meu App")}
      ></Button>
    </View>
  );
}
