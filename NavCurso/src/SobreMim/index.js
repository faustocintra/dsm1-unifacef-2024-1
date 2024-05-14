import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './styles'
import { Image } from 'react-native'

export default function Curso({navigation}) {
    return (
        <View style={styles.container}>
                <View >
                     <Image source={{ uri: 'https://w7.pngwing.com/pngs/528/425/png-transparent-smile-emoji-happy-happiness-happy-face-yellow-smiling-message-social-networks-whatsapp-thumbnail.png' }} style={{ width: 200, height: 200 }} />
                </View>
                <Text style={styles.texto}>Nome: Mariana Evangelista Reis Alves </Text>
                <Text style={styles.texto}>Telefone: 16994636769</Text>
                <Text style={styles.texto}>E-mail: marianaeralves@gmail.com</Text>
                <Pressable onPress={() => 
                    navigation.navigate('Meu App')}>
                    <Text style={styles.button}>Voltar</Text>
                </Pressable>     
        </View>
    );
}