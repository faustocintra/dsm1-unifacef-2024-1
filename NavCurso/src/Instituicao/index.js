import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './styles'
import { Image } from 'react-native'

export default function Curso({navigation}) {
    return (
        <View style={styles.container}>
                <View style={styles.container}>
                     <Image source={{ uri: 'https://www.blogdovestibular.com/wp-content/uploads/2019/07/Unifacef-1024x328.jpg' }} style={{ width: 400, height: 200 }} 
                     resizeMode="contain"/>
                <Text style={styles.texto}>UNI-FACEF</Text>
                <Text style={styles.texto}>Telefone:</Text>
                <Text style={styles.texto}>(16) 3713-4688</Text>
                <Pressable onPress={() => 
                    navigation.navigate('Meu App')}>
                    <Text style={styles.button}>Voltar</Text>
                </Pressable> 
                </View>    
        </View>
    );
}