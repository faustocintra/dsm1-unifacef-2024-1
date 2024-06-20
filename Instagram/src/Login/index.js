import React from "react";
import { TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FEF9FF", "#FFE6DD", "#E1EDFF"]}
        locations={[0, 0.2, 0.9,]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={styles.gradient}
      />
      <Image source={require("../../assets/previous-long-arrow.png")} style={styles.arrow} />
      <Text style={styles.linguagem}>Português (Brasil)</Text>
      <Image source={require("../../assets/Instagram-logo.png")} style={styles.logoInstagam} />
      <TextInput style={styles.input} placeholder="username, email or number..." />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.btnTextEntrar}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.senhaAlert}>Forget Your Password?</Text>
      <TouchableOpacity style={styles.btnCriarConta} onPress={() => navigation.navigate("CriarConta")}>
        <Text style={styles.btnTextCriarConta}>Create new account</Text>
      </TouchableOpacity>
      <Text stype={styles.nome}>Pedro Paulino Martiniano</Text>
    </View>
  );
}


export default Login