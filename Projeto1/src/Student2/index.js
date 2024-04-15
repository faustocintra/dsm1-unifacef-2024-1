import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

export default function Student ({name, grade1, grade2}){
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
                <Text>Média: </Text> <Text styles={styles.textBlue}>{(grade1 + grade2)/2}</Text>
            </View>
        </View>
    </View>
}