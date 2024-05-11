import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";
import Eu from "../../assets/eu.jpg";

export default function AboutMe({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Eu} />
      <View>
        <Text>Nome: Arthur Saltori Stante</Text>
      </View>
      <View>
        <Text>Telefone: (16) 00000-0000</Text>
      </View>
      <View>
        <Text>E-mail: teste@gmail.com</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
      </View>
    </View>
  );
}
