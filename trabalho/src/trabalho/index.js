// Importa as bibliotecas necessárias
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
// Importa o componente Trabalho
import Trabalho from './Trabalho';

// Define a função principal do aplicativo
export default function index() {
    return (
        // ScrollView permite rolar a tela se o conteúdo for muito grande
        <ScrollView>
            // View é como uma div em HTML, usada para agrupar outros componentes
            <View style= {styles.container}>
                // Renderiza o componente Trabalho
                <Trabalho />
                // StatusBar é a barra de status do dispositivo
                <StatusBar style ="auto" />
            </View>
        </ScrollView>
    );
}

// Define os estilos dos componentes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC', // Cor de fundo 
        padding: 12, // Adicionar espaçamento interno
    },
});
