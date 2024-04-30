import React from "react";
import {View, Text, Button} from 'react-native'
import styles from "./style";

export default function Homepage({navigation}){
    return(
        <View style={StyleSheet.container}>
            <Text>Página Inicial</Text>
            <Button 
                title="Ir para detalhes"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}
