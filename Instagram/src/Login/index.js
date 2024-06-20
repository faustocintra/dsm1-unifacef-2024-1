import React from "react";
import { TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import { styles } from "./styles";

const LoginInput = ({ placeholder, style }) => (
  <TextInput style={style} placeholder={placeholder} />
);

LoginInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

const Login = ({ navigation }) => {
  const {
    container,
    gradient,
    arrow,
    language,
    logoInstagram,
    input,
    btnLogin,
    btnTextLogin,
    passwordAlert,
    btnCreateAccount,
    btnTextCreateAccount,
  } = styles;

  return (
    <View style={container}>
      <LinearGradient
        colors={["#FFF4ED", "#FFE4DD", "#E1EDFE"]}
        locations={[0, 0.2, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={gradient}
      />
      <Image source={require("../../assets/voltar.png")} style={arrow} />
      <Text style={language}>Português (Brasil)</Text>
      <Image
        source={require("../../assets/instagram-logo.png")}
        style={logoInstagram}
      />
      <LoginInput
        style={input}
        placeholder="Nome de usuário, email ou número"
      />
      <LoginInput style={input} placeholder="Senha" />
      <TouchableOpacity
        style={btnLogin}
        onPress={() => navigation.navigate("home-screen")}
      >
        <Text style={btnTextLogin}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgot-password")}>
        <Text style={passwordAlert}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={btnCreateAccount}
        onPress={() => navigation.navigate("create-account-screen")}
      >
        <Text style={btnTextCreateAccount}>Criar nova conta</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 15 }}>
        Leandro Andrade Vieira - 24003
      </Text>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
