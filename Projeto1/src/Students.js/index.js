import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Students = ({ name, grade1, grade2 }) => {
    const media = (grade1 + grade2) / 2; // Calcula a média corretamente

    return (
        <View style={styles.students}>
            <Text style={styles.name}>Nome do Aluno: {name}</Text>
            <View style={styles.titleContainer}></View>
            <Text style={styles.grade}>Nota 1º Bimestre: {grade1}</Text>
            <Text style={styles.grade}>Nota 2º Bimestre: {grade2}</Text>
            <Text style={styles.grade}>Média: {media}</Text>
        </View>
    );
};

export default Students;
