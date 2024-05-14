import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './styles'
import { Image } from 'react-native'

export default function Curso({navigation}) {
    return (
        <View style={styles.container}>
                <View style={styles.container}>
                     <Image source={{ uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/15/programadora-us3i6jqikoxk.jpg' }} style={{ width: 500, height: 300 }} 
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