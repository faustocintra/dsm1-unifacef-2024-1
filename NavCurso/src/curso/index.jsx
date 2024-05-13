import React from "react";
import { View, Text, Button } from "react-native";
import style from "./style";
import { DefaultTheme } from "@react-navigation/native";
import styles from "./style";
import { Image } from "expo-image";

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source="../../assets/engenharia.jpg" style={styles.Image}/>
      <Text>Engenharia de Software</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.navigate("Meu App")}
      ></Button>
    </View>
  );
}
