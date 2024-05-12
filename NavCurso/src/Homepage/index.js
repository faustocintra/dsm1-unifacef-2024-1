import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.buttonContainer}> 
    <Text style={styles.header}>Meu App</Text>
      <Pressable
        title="Sobre Mim"
        onPress={() => navigation.navigate("Sobre Mim")}
        style={styles.button}
      >
        <Text style={styles.text}>Sobre Mim</Text>
      </Pressable>
      <Pressable
        title="Curso"
        onPress={() => navigation.navigate("Curso")}
        style={styles.button}
      >
        <Text style={styles.text}>Curso</Text>
      </Pressable>
      <Pressable
        title="Instituição"
        onPress={() => navigation.navigate("Instituição")}
        style={styles.button}
      >
        <Text style={styles.text}>Instituição</Text>
      </Pressable>
    </View>
  );
}
