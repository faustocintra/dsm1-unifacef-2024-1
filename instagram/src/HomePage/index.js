import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import foto from "../../assets/Instagram_icon-removebg-preview.png";
import foto2 from "../../assets/meta .png";

export default function Homepage({ navigation }) {
  return (
    <LinearGradient
      colors={['#F9D9E5', '#D9E5F9', '#E5D9F9']}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.textOverlay}>
          <Text style={styles.languageText}>Português (Brasil)</Text>
        </View>
        <View style={styles.photoContainer}>
          <Image source={foto} style={styles.photo} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nome do usuário, email ou número de telefone"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("Inicio")}>

          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* Adicione aqui a lógica para o botão Esqueceu a senha? */
          }}
        >
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <TouchableOpacity style={styles.link2}>
            <Text style={styles.linkText2}>Criar nova conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image source={foto2} style={styles.footerImage} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textOverlay: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  languageText: {
    fontSize: 16,
    color: "#808080",
    backgroundColor: "transparent",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  photoContainer: {
    width: 150,
    height: 150,
    marginBottom: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  input: {
    width: "60%",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  forgotPassword: {
    marginBottom: 30,
    fontWeight: "bold",
    color: "black",
  },
  link2: {
    borderColor: "#026df7",
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    width: "60%",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  linkText2: {
    color: "#026df7",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#026df7",
    borderRadius: 50,
    width: "60%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 60,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
});
