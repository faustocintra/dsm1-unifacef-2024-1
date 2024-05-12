import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./style";

export default function Curso({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.infoContainer}>
      <Text style={styles.header}>Curso</Text>
      <Image 
            source={require('./img/software.jpg')}
            style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text style={styles.infoText}>Engenharia de software</Text>

        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Voltar</Text>
      </Pressable>
      </View>
      
    </View>
  );
}