import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './styles'
import { Image } from 'react-native'

export default function Curso({navigation}) {
    return (
        <View style={styles.container}>
                <View style={styles.container}>
                     <Image source={{ uri: 'https://www.unialfa.com.br/arqsfck/images/it-specialist-checking-code-at-computer-in-the-dark-office-at-night.jpg' }} style={{ width: 500, height: 300 }} 
                     resizeMode="strech"/>
                <Text style={styles.texto}>Curso: Engenharia de Software</Text>
                <Pressable onPress={() => 
                    navigation.navigate('Meu App')}>
                    <Text style={styles.button}>Voltar</Text>
                </Pressable>     
                </View>
        </View>
    );
}

