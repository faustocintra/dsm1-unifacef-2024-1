import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./style";
import { DefaultTheme } from "@react-navigation/native";

export default function MeuApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Sobre Mim"
        onPress={() => navigation.navigate("SobreMim")}
      ></Button>
      <Button
        title="Curso"
        onPress={() => navigation.navigate("Curso")}
      ></Button>
      <Button
        title="Instituição"
        onPress={() => navigation.navigate("Instituição")}
      ></Button>
    </View>
  );
}
