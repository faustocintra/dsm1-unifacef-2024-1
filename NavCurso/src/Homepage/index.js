import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <Pressable
        title="Sobre Mim"
        onPress={() => navigation.navigate("About")}
        style={styles.button}
      >
        <Text style={styles.text}>Sobre Mim</Text>
      </Pressable>
      <Pressable
        title="Curso"
        onPress={() => navigation.navigate("Course")}
        style={styles.button}
      >
        <Text style={styles.text}>Curso</Text>
      </Pressable>
      <Pressable
        title="Instituição"
        onPress={() => navigation.navigate("Institution")}
        style={styles.button}
      >
        <Text style={styles.text}>Instituição</Text>
      </Pressable>
    </View>
  );
}
