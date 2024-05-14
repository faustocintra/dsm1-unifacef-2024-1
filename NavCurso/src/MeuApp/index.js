import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './style'

export default function MeuApp({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.menu}>Menu</Text>   
            <View>
                <Pressable onPress={() => 
                    navigation.navigate('Sobre Mim')}>
                    <Text style={styles.button}>Sobre mim</Text>
                </Pressable>
                <Pressable onPress={() => 
                    navigation.navigate('Curso')}>
                    <Text style={styles.button}>Curso</Text>
                </Pressable>
                <Pressable onPress={() => 
                    navigation.navigate('Instituicao')}>
                    <Text style={styles.button}>Instituição</Text>
                </Pressable>
            </View>        
        </View>
    );
}