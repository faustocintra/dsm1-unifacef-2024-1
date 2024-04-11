// @ts-nocheck
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './style';

const Equation = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [delta, setDelta] = useState(null);
    const [x1, setX1] = useState(null);
    const [x2, setX2] = useState(null);

    const calcularDelta = () => {
        const deltaValue = Math.pow(b, 2) - 4 * a * c;
        setDelta(deltaValue);

        if (deltaValue < 0) {
            setX1(null);
            setX2(null);
        } else {
            const raizDelta = Math.sqrt(deltaValue);
            const x1Value = (-b + raizDelta) / (2 * a);
            const x2Value = (-b - raizDelta) / (2 * a);
            setX1(x1Value);
            setX2(x2Value);
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Calcular Delta" onPress={calcularDelta} />
            <Text>Delta: {delta}</Text>
            {delta >= 0 && (
                <View>
                    <Text>X1: {x1}</Text>
                    <Text>X2: {x2}</Text>
                </View>
            )}
            {delta < 0 && <Text>Não há raízes reais para a equação de segundo grau.</Text>}
        </View>
    );
};
export default Equation;
