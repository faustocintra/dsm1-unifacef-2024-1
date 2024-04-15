import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

export default function Viagem ({distancia, precoEtanol, precoGasolina}){
    const precoEtanol = precoEtanol * (distancia / 9);
    const precoGasolina = precoGasolina * (distancia / 11);
    const menor = precoEtanol < precoGasolina

    return <View styles={styles.card}>
        <View>
            <Text styles={styles.titleText}>{name}</Text>
        </View>
        <View>
            <View styles={styles.horizontal}>
                <Text>Distancia em KM:</Text> <Text styles={styles.textBlue}>{distancia}</Text>
            </View>
            <View styles={styles.horizontal}>
                <Text>Preço Etanol:</Text > <Text styles={styles.textBlue}>{precoEtanol}</Text>
            </View>
            <View styles={styles.horizontal}>
                <Text>Preço Gasolina: </Text> <Text styles={styles.textBlue}>{precoGasolina}</Text>
            </View>

            <View styles={styles.horizontal}>
                <Text>Preço: </Text> <Text styles={menor ? styles.textGreen : styles.textOrange}>{menor ? {precoEtanol} : {precoGasolina} }</Text>
            </View>
        </View>
    </View>
}