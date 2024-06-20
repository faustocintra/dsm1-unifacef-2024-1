import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/engenharia_software.jpg")}
        style={{ width: 150, height: 150, borderRadius: 10 }}
      />
      <Text style={styles.text}>Engenharia de Software</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Voltar</Text>
      </Pressable>
    </View>
  );
}
