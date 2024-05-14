import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Homepage( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text>Homepage</Text>
            <button
                title="Ir para a tela de detalhes"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}