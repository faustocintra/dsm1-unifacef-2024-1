// Importando as bibliotecas necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

// Definindo o componente App
const FormCalculadora = () => {
    // Inicializando o estado dos componentes
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')
    const [resultado, setResultado] = useState('')

    // Função para calcular as raízes da equação do segundo grau
    const calcularRaizes = () => {
        const valorA = parseFloat(a)
        const valorB = parseFloat(b)
        const valorC = parseFloat(c)

        // Calculando o delta
        const delta = Math.pow(valorB, 2) - (4 * valorA * valorC)

        // Verificando se há raízes reais
        if (delta < 0) {
            // Não há raízes reais
            setResultado('Não há raízes válidas para a equação de segundo grau.')
        } else {
            // Calculando as raízes
            const x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA)
            const x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA)

            // Exibindo o resultado
            setResultado(`x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`)
        }
    }

    // Retornando a interface do componente
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculo da fórmula de Bhaskara</Text>

            {/* Inputs para receber os valores de a, b e c */}
            <TextInput
                style={styles.input}
                placeholder="Digite o valor de a:"
                keyboardType="numeric"
                value={a}
                onChangeText={(text) => setA(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o valor de b:"
                keyboardType="numeric"
                value={b}
                onChangeText={(text) => setB(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o valor de c:"
                keyboardType="numeric"
                value={c}
                onChangeText={(text) => setC(text)}
            />

            {/* Botão para chamar a função que realiza o calculo de Bhaskara */}
            <Button title="Calcular Raízes" onPress={calcularRaizes} />

            {/* Exibindo o resultado do cálculo */}
            <Text style={styles.resultado}>{resultado}</Text>
        </View>
    )
}


export default FormCalculadora
