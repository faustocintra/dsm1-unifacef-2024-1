import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Student({ name, grade1, grade2 }) {
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{name}</Text>
      </View>
      <View>
        <View style={styles.horizontal}>
          <Text>Nota do 1º bimestre: </Text>
          <Text style={styles.textBlue}>{grade1}</Text>
        </View>
        <View style={styles.horizontal}>
          <Text>Nota do 2º bimestre: </Text>
          <Text style={styles.textBlue}>{grade2}</Text>
        </View>
        <View styles={styles.horizontal}>
          <Text>Média: </Text>
          <Text style={styles.textBlue}>{(grade1 + grade2) / 2}</Text>
        </View>
      </View>
    </View>
  );
}
