// @ts-nocheck
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './style';

const Equation = () => {
    // Define os estados para os valores de a, b, c, delta, x1 e x2
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [delta, setDelta] = useState(null);
    const [x1, setX1] = useState(null);
    const [x2, setX2] = useState(null);

    // Função para calcular o delta e as raízes da equação
    const calcularDelta = () => {
        // Calcula o valor de delta usando a fórmula
        const deltaValue = Math.pow(b, 2) - 4 * a * c;
        setDelta(deltaValue); // Atualiza o estado do delta

        // Verifica se há raízes reais com base no valor de delta
        if (deltaValue < 0) {
            // Se não houver raízes reais, define x1 e x2 como null
            setX1(null);
            setX2(null);
        } else {
            // Se houver raízes reais, calcula as raízes usando a fórmula de Bhaskara
            const raizDelta = Math.sqrt(deltaValue);
            const x1Value = (-b + raizDelta) / (2 * a);
            const x2Value = (-b - raizDelta) / (2 * a);
            setX1(x1Value); // Atualiza o estado de x1
            setX2(x2Value); // Atualiza o estado de x2
        }
    };

    return (
        // Componente View para estruturar o layout
        <View style={styles.container}>
            {/* Inputs para os valores de a, b e c */}
            <TextInput
                style={styles.input}
                placeholder="Digite o valor de a"
                value={a}
                onChangeText={setA}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o valor de b"
                value={b}
                onChangeText={setB}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o valor de c"
                value={c}
                onChangeText={setC}
                keyboardType="numeric"
            />
            {/* Botão para calcular o delta ao pressionar */}
            <Button title="Calcular Delta" onPress={calcularDelta} />
            {/* Mostra o valor de delta */}
            <Text style={styles.text}>Delta: {delta}</Text>
            {/* Mostra as raízes se delta for maior ou igual a 0 */}
            {delta >= 0 && (
                <View>
                    <Text style={styles.text}>X1: {x1}</Text>
                    <Text style={styles.text}>X2: {x2}</Text>
                </View>
            )}
            {/* Mostra mensagem se não houver raízes reais */}
            {delta < 0 && <Text>Não há raízes reais para a equação de segundo grau.</Text>}
        </View>
    );
};

export default Equation;
