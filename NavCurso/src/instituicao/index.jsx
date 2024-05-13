import React from "react";
import { View, Text, Button } from "react-native";
import style from "./style";
import { DefaultTheme } from "@react-navigation/native";
import styles from "./style";
import { Image } from "expo-image";

export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source="../../assets/facef.png" contentFit="fill"/>
      <Text>Unifacef</Text>
      <Text>Telefone:</Text>
      <Text>xxxxxxxxxxxx</Text>

      <Button
        title="Voltar"
        onPress={() => navigation.navigate("Meu App")}
      ></Button>
    </View>
  );
}
