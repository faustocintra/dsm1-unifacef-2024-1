import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

export default function Alunos ({name, grade1, grade2}){
    const media = (grade1 + grade2) / 2;
    const aprovado = media >= 6 && faltas < 20;

    return <View styles={styles.card}>
        <View>
            <Text styles={styles.titleText}>{name}</Text>
        </View>
        <View>
            <View styles={styles.horizontal}>
                <Text>Nota do 1º bimestre:</Text> <Text styles={styles.textBlue}>{grade1}</Text>
            </View>
            <View styles={styles.horizontal}>
                <Text>Nota do 2º bimestre:</Text > <Text styles={styles.textBlue}>{grade2}</Text>
            </View>
            <View styles={styles.horizontal}>
                <Text>Qtde de faltas: </Text> <Text styles={styles.textBlue}>
                    {aprovado ? 'Aprovado' : 'Reprovado'}
                    </Text>
            </View>
        </View>
    </View>
}