import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Alunos({ name, grade1, grade2, faltas }) {
  function materia(grade1, grade2, faltas) {
    if ((grade1 + grade2) / 2 >= 6 && faltas <= 20) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

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
        <View styles={styles.horizontal}>
          <Text>Faltas: </Text>
          <Text style={styles.textBlue}>{faltas}</Text>
        </View>
        <View styles={styles.horizontal}>
          <Text>Status: </Text>
          <Text>{materia(grade1, grade2, faltas)}</Text>
        </View>
      </View>
    </View>
  );
}
