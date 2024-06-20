import React from "react"; // Importa a biblioteca React
import { Pressable, Text, View, StyleSheet, TextInput, Image } from "react-native"; // Importa os componentes Pressable, Text, View, StyleSheet, TextInput e Image da biblioteca react-native
import { LinearGradient } from "expo-linear-gradient"; // Importa o componente LinearGradient da biblioteca expo-linear-gradient

const Loginpage = ({ navigation }) => { // Componente funcional LoginPage recebendo a prop navigation
  return (
    <View style={fn_styles.container}> {/* View principal com estilo container */}
      <LinearGradient
        colors={["#FFF4DD", "#FFE6DD", "#E1EDFF"]} // Cores para o gradiente linear
        locations={[0, 0.2, 0.9,]} // Localizações das cores no gradiente
        start={{ x: 0, y: 0 }} // Início do gradiente
        end={{ x: 1, y: 0.2 }} // Fim do gradiente
        style={fn_styles.gradient} // Estilo do gradiente
      />
      <Image source={require("../../assets/arrow-icon.png")} style={fn_styles.arrow} /> {/* Ícone de seta */}
      <Text style={fn_styles.language}> Português (Brasil)</Text> {/* Texto de idioma */}
      <Image source={require("../../assets/logoInsta.png")} style={fn_styles.logoinsta} /> {/* Logo do Instagram */}
      <TextInput style={fn_styles.input} placeholder="Nome de usuário, email ou número" /> {/* Campo de entrada para nome de usuário, email ou número */}
      <TextInput style={fn_styles.input} placeholder="Senha" /> {/* Campo de entrada para senha */}
      <Pressable style={fn_styles.buttonEnter} onPress={() => navigation.navigate("Home")}>
        <Text style={fn_styles.buttonEnterText}>Entrar</Text> {/* Botão de entrar */}
      </Pressable>
      <Text style={fn_styles.passwordAlert}>Esqueceu a senha?</Text> {/* Texto para recuperação de senha */}
      <Pressable style={fn_styles.buttonCreateAccount} onPress={() => navigation.navigate("CriarConta")}>
        <Text style={fn_styles.buttonCreateAccountText}>Criar nova conta</Text> {/* Botão para criar nova conta */}
      </Pressable>
      <Image source={require("../../assets/logoMeta.png")} style={fn_styles.logoMeta} /> {/* Logo da Meta */}
    </View>
  );
}

const fn_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  language: {
    fontSize: 16,
    marginBottom: 90,
    marginTop: 80,
    color: "#666666",
    textAlign: "center"
  },
  logoinsta: {
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
  buttonEnter: {
    backgroundColor: '#2E82EA',
    padding: 15,
    margin: 10,
    width: "80%",
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonEnterText: {
    color: '#fff',
    fontSize: 20,
    textAlign: "center",
  },
  passwordAlert: {
    fontSize: 18,
  },
  buttonCreateAccount: {
    padding: 15,
    width: "80%",
    borderRadius: 30,
    marginTop: 150,
    border: "solid",
    borderColor: "#2E82EA",
    borderWidth: 1.5,
  },
  buttonCreateAccountText: {
    color: '#2E82EA',
    fontSize: 20,
    textAlign: "center",
  },
  logoMeta: {
    width: 120,
    height: 40,
    objectFit: "contain",
  }
});

export default Loginpage