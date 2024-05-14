import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './styles'
import { Image } from 'react-native'

export default function Curso({navigation}) {
    return (
        <View style={styles.container}>
                <View >
                     <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/640px-Smiley.svg.png' }} style={{ width: 200, height: 200 }} />
                </View>
                <Text style={styles.texto}>Nome: Thiago Correia Azarias</Text>
                <Text style={styles.texto}>Telefone: 16993640000</Text>
                <Text style={styles.texto}>E-mail: thiagoazarias.placeholder@gmail.com</Text>
                <Pressable onPress={() => 
                    navigation.navigate('Meu App')}>
                    <Text style={styles.button}>Voltar</Text>
                </Pressable>     
        </View>
    );
}

