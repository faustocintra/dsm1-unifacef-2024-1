import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./style";

export default function sobre({ navigation }) {
  return (
    <View style ={styles.container}>
        <Image
            source ={require("../../assets/stella.jpg")}
            style={{ width: 170, height: 170, borderRadius: 20 }}
        />
        <Text style={styles.text}> Stella Barbosa de Souza </Text>
        <Text style={styles.text}>(16)991307429</Text>
        <Text style= {styles.text}> stellabs.2011@gmail.com</Text>
        <Pressable onPress= {() => navigation.goBack()} style={styles.button}>
            <Text style={styles.text}> Voltar </Text>
        </Pressable>
    </View>
 );
}