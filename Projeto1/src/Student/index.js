import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Student = ({nome, nota1, nota2}) => {
    const media = (nota1 + nota2)/2 
    return (
    <View style={styles.student}>
        <View style={styles.nomeContainer}>
          <Text style={styles.nome}>{nome}</Text>
        </View>
        <Text style={styles.grade}>Nota 1: {nota1}</Text>
        <Text style={styles.grade}>Nota 2: {nota2}</Text>
        <Text style={styles.grade}>Media: {media}</Text>
    </View>)
}



export default Student