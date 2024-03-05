import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ userName, userCode, grade1, grade2 }) => {
  return (
    <View style={styles.card}>
      <Image source={require("../../assets/LOGO_Uni-FACEF.png")} style={styles.logo} />
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.code}>Código: {userCode}</Text>
      <Text style={styles.grade}>Nota 1: {grade1}</Text>
      <Text style={styles.grade}>Nota 2: {grade2}</Text>
      <Text style={styles.grade}>Média: {(grade1 + grade2) / 2}</Text>
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
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
  grade: {
    marginTop: 10,
  }
});

export default Card;
