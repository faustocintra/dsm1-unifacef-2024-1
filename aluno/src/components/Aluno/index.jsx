import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Aluno = ({ userName, userCode, grade1, grade2, faltas }) => {

  const verifySituation = () => {

    const media = (grade1 + grade2) / 2;
    
    if (media >= 6 && faltas <= 20) {
      return "Aprovado";
    } else if (media >= 4 && faltas <= 20) {
      return "Exame";
    } else {
      return "Reprovado";
    }
  };

  React.useEffect(() => {
    verifySituation(grade1, grade2, faltas);
  }
  , [grade1, grade2, faltas]);

  return (
    <View style={styles.card}>
      <View style={styles.status} />
      <Image source={require("../../../assets/LOGO_Uni-FACEF.png")} style={styles.logo} />
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.code}>Código: {userCode}</Text>
      <Text style={styles.grade}>Nota 1: {grade1}</Text>
      <Text style={styles.grade}>Nota 2: {grade2}</Text>
      <Text style={styles.grade}>Média: {(grade1 + grade2) / 2}</Text>
      <Text style={styles.grade}>Situação:{verifySituation()} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    alignContent: "space-around",
  },
  status: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#344f8a",
    position: "absolute",
    top: 10,
    left: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 100,
    marginTop: 10,
    resizeMode: "contain",
  },
  grade: {
    marginTop: 10,
  },
});

export default Aluno;
