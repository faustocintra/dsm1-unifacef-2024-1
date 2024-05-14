import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";
import software from "../../assets/engenhariaDeSoftware.png";

export default function Courses({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={software} />
      <View>
        <Text>Engenharia de Software</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
      </View>
    </View>
  );
}
