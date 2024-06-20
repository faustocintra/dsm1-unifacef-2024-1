import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/facef.png")} />
      <Text style={styles.text}>Unifacef</Text>
      <Text style={styles.text}>Telefone:</Text>
      <Text style={styles.text}>(16) 3713-4688</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Voltar</Text>
      </Pressable>
    </View>
  );
}
