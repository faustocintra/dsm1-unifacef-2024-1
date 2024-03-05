import React from "react";
import { Text, View } from "react-native";
import styles from './styles';

const Student = ({ name, grade1, grade2 }) => {
    const media = ((grade1 + grade2) / 2).toFixed(1);

    return (
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.grade}>Nota 1º bim: {grade1}</Text>
            <Text style={styles.grade}>Nota 2º bim: {grade2}</Text>
            <Text style={styles.grade}>Média: {media}</Text>
        </View>
    );
};

export default Student;