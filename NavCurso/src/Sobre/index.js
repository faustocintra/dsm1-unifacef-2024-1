import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./style";

export default function Sobre({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.header}>Sobre mim</Text>
        <Image
          source={require("./img/Jana.jpeg")}
          style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text style={styles.infoText}>Janaisa Voltolino</Text>
        <Text style={styles.infoText}>16 982092941</Text>
        <Text style={styles.infoText}>jvoltoliino@hotmail.com</Text>

        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.text}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}   