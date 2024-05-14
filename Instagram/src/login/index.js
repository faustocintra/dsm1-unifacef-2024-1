import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={["#ADD8E6", "#FFFFFF"]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.container}
    >
      <View style={styles.language}>
        <Text>Português (Brasil)</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/instagram.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário, email ou numero"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Esqueceu a senha?</Text>
        <TouchableOpacity style={styles.outlined}>
            <Text style={styles.textOutilined}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/meta.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.meta}>Meta</Text>
      </View>
    </LinearGradient>
  );
};

export default Login;
