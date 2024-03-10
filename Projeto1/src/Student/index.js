import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Student = ({ name, grade1, grade2 }) => {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Nota 1º bim: </Text>
        <Text style={styles.grade}>{grade1}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Nota 2º bim: </Text>
        <Text style={styles.grade}>{grade2}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Média: </Text>
        <Text style={styles.grade}>{(grade1 + grade2) / 2}</Text>
      </View>
    </View>
  );
};

export default Student;
