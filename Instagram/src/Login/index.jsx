import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/previous-long-arrow.png")} style={styles.arrow} />
      <Text style={styles.linguagem}>Português (Brasil)</Text>
      <Image source={require("../../assets/Instagram-logo.png")} style={styles.logoInstagam} />
      <TextInput style={styles.input} placeholder="Nome de usuário, email ou número" />
      <TextInput style={styles.input} placeholder="Senha" />
      <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.btnTextEntrar}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.senhaAlert}>Esqueceu a senha?</Text>
      <TouchableOpacity style={styles.btnCriarConta} onPress={() => navigation.navigate("CriarConta")}>
        <Text style={styles.btnTextCriarConta}>Criar nova conta</Text>
      </TouchableOpacity>
      <Text style={styles.senhaAlert}>Augusto Benate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
  arrow: {
    objectFit: "contain",
    width: 35,
    height: 35,
    position: "absolute",
    left: 20,
    top: 60,
  },
  linguagem: {
    fontSize: 16,
    marginBottom: 90,
    marginTop: 80,
    color: "#666666",
  },
  logoInstagam: {
    width: 90,
    height: 90,
    objectFit: "contain",
    marginBottom: 90,
  },
  input: {
    backgroundColor: "#F0F0F0",
    width: "80%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    border: "solid",
    borderColor: "#DCE1EB",
    borderWidth: 1.5,
  },
  btnEntrar: {
    backgroundColor: '#2E82EA',
    padding: 15,
    margin: 10,
    width: "80%",
    marginBottom: 15,
  },
  btnTextEntrar: {
    color: '#fff',
    fontSize: 20,
    textAlign: "center",
  },
  senhaAlert: {
    fontSize: 18,
  },
  btnCriarConta: {
    padding: 15,
    width: "80%",
    marginTop: 150,
    border: "solid",
    borderColor: "#2E82EA",
    borderWidth: 1.5,
  },
  btnTextCriarConta: {
    color: '#2E82EA',
    fontSize: 20,
    textAlign: "center",
  },
  nome: {
    width: 120,
    height: 40,
    objectFit: "contain",
  }
});

export default Login