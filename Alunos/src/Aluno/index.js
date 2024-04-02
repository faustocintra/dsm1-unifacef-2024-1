import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Aluno = ({ nome, nota1, nota2 }) => {
  const media = (nota1 + nota2) / 2;

  let corStatus;
  let faltas = 20;
  let status;

  if (media > 6 || faltas > 20) {
    status = "Aprovado";
    corStatus = "#008000";
  } else {
    status = "Reprovado";
    corStatus = "#FF0000";
  }

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nome}>{nome}</Text>
      </View>
      <View style={styles.horizontal}>
        <Text>
          Nota do 1º Bimestre:
          {nota1.toLocaleString("pt-BR", {
            minimumFractionalDigits: 1,
            maximumFractionalDigits: 1,
          })}
        </Text>
      </View>
      <View style={styles.horizontal}>
        <Text>
          Nota do 2º Bimestre:
          {nota2.toLocaleString("pt-BR", {
            minimumFractionalDigits: 1,
            maximumFractionalDigits: 1,
          })}
        </Text>
      </View>
      <View style={styles.horizontal}>
        <Text>
          Media:
          {media.toLocaleString("pt-BR", {
            minimumFractionalDigits: 1,
            maximumFractionalDigits: 1,
          })}
        </Text>
      </View>
      <View>
        <Text style={{ color: corStatus }}>{status}</Text>
      </View>
      <View style={styles.horizontal}>
        <Text>Faltas: </Text>
        <Text>{faltas}</Text>
      </View>
    </View>
  );
};

export default Aluno;
