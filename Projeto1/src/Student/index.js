import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'


const CustomCard = ({ name, nota1, nota2 }) => {
    const media = ((nota1 + nota2)/ 2)
    return <View style={styles.card}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
        </View>
        <Text style={styles.body}>Grade 1: {nota1}</Text>
        <Text style={styles.body}>Grade 2: {nota2}</Text>
        <Text style={styles.body}>Media : {media}</Text>
    </View>;
}

export default CustomCard;

