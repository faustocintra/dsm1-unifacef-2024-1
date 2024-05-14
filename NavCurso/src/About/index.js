import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Image
        source={require("../../assets/foto-leandro.jpeg")}
        style={styles.image}
      />
      <Text style={styles.text}>Leandro Andrade Vieira</Text>
      <Text style={styles.text}>(16) 997639921</Text>
      <Text style={styles.text}>leandradevieira38@gmail.com</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}
