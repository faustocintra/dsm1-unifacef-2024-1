import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

export default function Details({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <Text>Página de detalhes</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  );
}
