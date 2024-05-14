import React from "react";
import { View, Button } from "react-native";
import styles from "./style";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Sobre mim"
          onPress={() => navigation.navigate("AboutMe")}
        />
      </View>
      <View style={styles.button}>
        <Button title="Curso" onPress={() => navigation.navigate("Courses")} />
      </View>
      <View style={styles.button}>
        <Button
          title="Instituição"
          onPress={() => navigation.navigate("Institution")}
        />
      </View>
    </View>
  );
}
