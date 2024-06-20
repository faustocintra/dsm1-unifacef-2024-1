import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./style";

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
        <Image
            source={require("../../assets/pedro_garcia.jpg")}
            style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text style={styles.text}>Pedro Eduardo Garcia</Text>
        <Text style={styles.text}>(16) 98170-0116</Text>
        <Text style={styles.text}>pedroedu.gc02@gmail.com</Text>
        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
            <Text style={styles.text}>Voltar</Text>
        </Pressable>
    </View>
 );
}