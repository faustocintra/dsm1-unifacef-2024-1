import React from "react";
import { Pressable, Text, View, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFF4FF", "#FFE6DD", "#E1EDFF"]}
        locations={[0, 0.2, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={styles.gradient}
      />
      <Image source={require("../../assets/previous-long-arrow.png")} resizeMode="contain" style={styles.arrow} />
      <Text style={styles.linguagem}>Português (Brasil)</Text>
      <Image source={require("../../assets/instagram-logo.png")} resizeMode="contain" style={styles.logoInstagam} />
      <TextInput style={styles.input} placeholder="Nome de usuário, email ou número" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry />
      <Pressable style={styles.btnEntrar} onPress={() => navigation.navigate("Homepage")}>
        <Text style={styles.btnTextEntrar}>Entrar</Text>
      </Pressable>
      <Text style={styles.senhaAlert}>Esqueceu a senha?</Text>
      <Pressable style={styles.btnCriarConta}>
        <Text style={styles.btnTextCriarConta}>Criar nova conta</Text>
      </Pressable>
      <Image source={require("../../assets/Meta-logo-grayscale.png")} resizeMode="contain" style={styles.logoMeta} />
    </View>
  );
}

export default Login;