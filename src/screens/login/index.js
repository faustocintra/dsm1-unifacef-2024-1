import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../../components/button";

export default function Login({ navigation }) {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  const styles = StyleSheet.create({
    gradient: {
      flex: 1
    },
    mainContainer: {
      flex: 1,
      marginTop: 5,
    },
    logoImage: {
      width: 80,
      height: 80,
    },
    textInput: {
      height: 40,
      margin: 12,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff'
    },
  });

  return (
    <LinearGradient
      colors={['#FCF2F2', '#69A1E2', '#EBFAF2']}
      locations={[0.0, 0.5, 1.0]}
      style={styles.gradient}
    >
      <View style={styles.mainContainer}>
        <StatusBar style="dark" translucent />
        <View style={{ padding: 20 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ marginVertical: 40 }}>
            <Image
              style={styles.logoImage}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/023/986/555/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png',
              }}
            />
          </View>
          <View style={{ width: '100%' }}>
            <SafeAreaView>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nome de usuário, email ou número de celular"
                placeholderTextColor={'#a19f9f'}
              />
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholder="Senha"
                placeholderTextColor={'#a19f9f'}
              />
            </SafeAreaView>
            <View style={{ paddingHorizontal: 8 }}>
              <Button
                text="Entrar"
                action={() => navigation.navigate("home")}
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black' }}>
                Esqueceu a senha?
              </Text>
            </View>
          </View>
        </View>
        <KeyboardAvoidingView
          style={{ position: 'absolute', bottom: 10, left: 0, right: 0, marginHorizontal: 16 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                Breno Martins Oliveira
              </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
}
