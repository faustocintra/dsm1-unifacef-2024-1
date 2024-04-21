import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './styles'; // Importa os estilos do arquivo styles.js

export default function Cot({ qtd_origem, cot_destino }) {
    // Define estados para armazenar os valores da quantidade de origem, cotação de destino e quantidade de destino
    const [qtd_Origem, setQtdOrigem] = useState(qtd_origem);
    const [cot_Destino, setCotDestino] = useState(cot_destino);
    const [qtd_Destino, setQtdDestino] = useState(0);

    // Função para lidar com a alteração da quantidade de origem
    const handleQtdOrigemChange = (newValue) => {
        setQtdOrigem(parseFloat(newValue)); // Converte o novo valor para um número de ponto flutuante e atualiza o estado
    };

    // Função para lidar com a alteração da cotação de destino
    const handleCotDestinoChange = (newValue) => {
        setCotDestino(parseFloat(newValue)); // Converte o novo valor para um número de ponto flutuante e atualiza o estado
    };

    // Função para calcular a cotação e atualizar a quantidade de destino
    const calcularCotacao = () => {
        const cotacao = qtd_Origem / cot_Destino; // Calcula a cotação
        setQtdDestino(cotacao); // Atualiza o estado da quantidade de destino com o valor calculado
    };

    return (
        <View style={styles.container}> {/* Define o estilo do contêiner principal */}
            <Text style={styles.title}>Conversor de moedas</Text> {/* Define o estilo do título */}
            <View style={styles.inputContainer}> {/* Define o estilo do contêiner para os inputs */}
                <Text style={styles.label}>Quantia de moeda de origem</Text> {/* Define o estilo do rótulo do primeiro input */}
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleQtdOrigemChange}
                    inputMode='decimal'
                    keyboardType="decimal-pad"
                />
            </View>
            <View style={styles.inputContainer}> {/* Define o estilo do contêiner para os inputs */}
                <Text style={styles.label}>Cotação da moeda de destino</Text> {/* Define o estilo do rótulo do segundo input */}
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleCotDestinoChange}
                    inputMode='decimal'
                    keyboardType="decimal-pad"
                />
            </View>
            <View style={styles.buttonContainer}> {/* Define o estilo do contêiner para o botão */}
                <Button title="Calcular" onPress={calcularCotacao} /> {/* Define o estilo do botão */}
            </View>
            <View style={styles.resultContainer}> {/* Define o estilo do contêiner para o resultado */}
                <Text style={styles.resultText}>Quantia da moeda destino: {qtd_Destino.toFixed(2)}</Text> {/* Define o estilo do texto do resultado */}
            </View>
        </View>
    );
}
