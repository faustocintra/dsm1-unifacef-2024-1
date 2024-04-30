import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

export default function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pagina de detalhes</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  );
}
