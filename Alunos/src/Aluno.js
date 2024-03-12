import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Aluno = ({ name, grade1, grade2, falta, aprovado }) => {
    const media = (grade1 + grade2) / 2;
    var aprovado = False;
    if (media > 6 && falta < 20){
        aprovado = true
    }else{
        aprovado = false
    }

    return (
        <View style={styles.students}>
            <View style={styles.titleContainer}>
            <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.grade}>Nota 1° Bim: </Text>
            <Text >{grade1}</Text>
            <Text style={styles.grade}>Nota 2° Bim: {grade2}</Text>
            <Text style={styles.media}>Média: {media}</Text>
            <Text style={styles.falta}>Faltas: {falta}</Text>
            <Text style={styles.aprovado}>Aprovado: {aprovado ? 'Sim' : 'Não'}</Text>
        </View>
    );
};

export default Aluno