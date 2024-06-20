import React from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import styles from "./style";
import logo from "../../../assets/Logo.png";
import Seta from "../../../assets/Seta.png";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#FED8B1", "#FFB7B2", "#FDC7E1", "#E2C1F0"]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.container}
    >
      <View style={styles.flexSeta}>
        <Image source={Seta} style={styles.seta} />
      </View>
      <View>
        <Text>Português (Brasil)</Text>
      </View>
      <Image source={logo} style={styles.logo} />
      <View style={styles.input}>
        <TextInput
          placeholder="Nome de Usuário, email ou númer..."
          placeholderTextColor={"#A5A9AC"}
          style={[styles.placeholder]}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#A5A9AC"}
          style={[styles.placeholder]}
        ></TextInput>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.pressableEntrar}
        >
          <Text style={styles.textEntrar}>Entrar</Text>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Text style={styles.textSenha}>Esqueceu sua senha?</Text>
        </Pressable>
      </View>
      <View style={styles.meta}>        
        <Text style={styles.textMeta}>Ian Augusto Alvarenga Tonim</Text>
      </View>
      <View>
        <Pressable style={styles.pressableCriarConta}>
          <Text style={styles.text}>Criar nova conta</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};
export default Login;
