import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const PageInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu App</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutMe')}>
                <Text style={styles.buttonText}>Sobre Mim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Course')}>
                <Text style={styles.buttonText}>Curso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Institution')}>
                <Text style={styles.buttonText}>Instituição</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#444', 
        padding: 10, 
        marginVertical: 8, 
        width: '50%', 
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff', 
        fontWeight: 'bold',
        fontSize: 20,
    },
})