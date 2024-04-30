import React from "react";
import { View, Text, Button } from "react-native";
import style from './style'
import { DefaultTheme } from "@react-navigation/native";

export default function Homepage({navigation}){
    return(
        <View style={StyleSheet.container}>
            <Text>Página inicial</Text>
            <Button
            title="Ir para detalhes"
            onPress={()=> navigation.navigate('Details')}
            ></Button>
        </View>
    )
}