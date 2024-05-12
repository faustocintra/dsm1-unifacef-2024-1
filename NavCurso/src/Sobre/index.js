import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./style";

export default function Sobre({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.header}>Sobre mim</Text>
        <Image
          source={require("./img/me.png")}
          style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text style={styles.infoText}>Ana Carolina Neias</Text>
        <Text style={styles.infoText}>16 994172909</Text>
        <Text style={styles.infoText}>anacarolinaneias@gmail.com</Text>

        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.text}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
