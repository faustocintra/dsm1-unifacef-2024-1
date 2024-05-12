import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const { navigate } = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigate("sobre")}>
        <Text style={styles.buttonText}>Sobre mim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate("curso")}>
        <Text style={styles.buttonText}>Curso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate("instituicao")}>
        <Text style={styles.buttonText}>Instituição</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#344f8a",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#f9a826",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
