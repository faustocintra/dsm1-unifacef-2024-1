import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./style";

export default function Instituição({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.infoContainer}>
      <Text style={styles.header}>Instituição</Text>
      <Image 
            source={require('./img/facef.png')}
            style={{ width: 250, height: 100, borderRadius: 10, resizeMode: 'contain'}}
        />
        <Text style={styles.infoText}>Uni-Facef</Text>
        <Text style={styles.infoText}>Telefone: 16 3713-4688</Text>

        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Voltar</Text>
      </Pressable>
      </View>
      
    </View>
  );
}