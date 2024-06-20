import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Image } from "react-native";


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Image source={require("../../assets/previous-long-arrow.png")} style={styles.backArrow} />

      <Text style={styles.languageText}>Português (Brasil)</Text>
      
      <Image source={require("../../assets/Instagram-logo.png")} style={styles.instagramLogo} />
        <TextInput style={styles.inputField} placeholder="Nome de usuário, email ou número" />
        <TextInput style={styles.inputField} placeholder="Senha" />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
        <Text>Esqueceu a senha?</Text>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupButtonText}>Criar nova conta</Text>
      </TouchableOpacity>
      <Text>Leonardo Abib de Andrade - 25194</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    
  },
  backArrow: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 20,
    top: 50,
    resizeMode: "contain",
  },
  languageText: {
    fontSize: 15,
    marginTop: 90,
    marginBottom: 60,
    color: "#666666",
  },
  instagramLogo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 60,
  },
  inputField: {
    width: "80%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    fontSize: 15,
    borderColor: "#DCE1EB",
    borderWidth: 1,
  },
  loginButton: {
    width: "80%",
    padding: 15,
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#2E82EA',
    marginBottom: 15,
  },
  loginButtonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: "center",
  },  
  signupButton: {
    width: "80%",
    padding: 10,
    borderRadius: 30,
    marginTop: 100,
    borderColor: "#2E82EA",
    borderWidth: 1.5,
  },
  signupButtonText: {
    fontSize: 20,
    color: '#2E82EA',
    textAlign: "center",
  },
  metaLogo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
});

export default LoginScreen;
