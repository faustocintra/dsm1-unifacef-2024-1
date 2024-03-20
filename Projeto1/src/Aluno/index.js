import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';

export default function Aluno({ name, initialGrade1, initialGrade2 }) {
    const [grade1, setGrade1] = useState(initialGrade1);
    const [grade2, setGrade2] = useState(initialGrade2);

    const handleGrade1Change = (Number) => {
        setGrade1(parseFloat(Number));
    };

    const handleGrade2Change = (Number) => {
        setGrade2(parseFloat(Number));
    };
    // Calcula a média das notas
    const average = (grade1 + grade2) / 2;

    // Determina se o aluno está aprovado ou reprovado com base na média das notas
    const status = average >= 6 ? 'Aprovado' : 'Reprovado';

    return (
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{name}</Text>
            </View>
            <View>
                <View style={styles.horizontal}>
                    <Text>Nota do 1º bimestre: </Text>
                    <TextInput
                        style={styles.textBlue}
                        onChangeText={handleGrade1Change}
                        value={grade1}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.horizontal}>
                    <Text>Nota do 2º bimestre: </Text>
                    <TextInput
                        style={styles.textBlue}
                        onChangeText={handleGrade2Change}
                        value={grade2}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.horizontal}>
                    <Text>Média: </Text>
                    <Text style={styles.textBlue}>{((grade1 + grade2) / 2).toFixed(2)}</Text>
                </View>
                <View style={styles.horizontal}>
                    <Text>Status: </Text>
                    <Text style={[styles.textBlue, status === 'Aprovado' ? styles.textGreen : styles.textRed]}>{status}</Text>
                </View>
            </View>
        </View>
    );
}
