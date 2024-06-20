import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import logoInsta from "../../assets/Instagram_icon-removebg-preview.png";
import styles from "./styles";

export default function Homepage({ navigation }) {
  return (
    <LinearGradient
      colors={['#F9D9E5', '#D9E5F9', '#E5D9F9']}
      style={styles.background}
    >
      <View style={styles.mainContainer}>
        <View style={styles.languageSelector}>
          <Text style={styles.languageOption}>Portuguese (Brazil)</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={logoInsta} style={styles.logo} />
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Username, email or phone number"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.navigate("Inicio")}>

          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
          }}
        >
          <Text style={styles.passwordReminder}>Forgot password??</Text>
        </TouchableOpacity>

        <View style={styles.accountCreationContainer}>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create new account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerNote}>Lucas Henrique Bizzi</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
