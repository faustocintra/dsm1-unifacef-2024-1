import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function Details( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text>Página de detalhes</Text>

            <Pressable
                title="Voltar para a tela inicial"
                onPress={() => navigation.goBack('Homepage')}>
                <Text style={styles.textButton}>Voltar</Text>
            </Pressable>
            
        </View>
    );
}