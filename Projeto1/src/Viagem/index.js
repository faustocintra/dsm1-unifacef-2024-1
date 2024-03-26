import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';

export default function Viagem({ name, distancia, valor_etanol, valor_gas }) {
    const [dist, setDist] = useState(distancia);
    const [v_eta, setEta] = useState(valor_etanol);
    const [v_gas, setGas] = useState(valor_gas);
    const [valorGastoEtanol, setValorGastoEtanol] = useState(0);
    const [valorGastoGasolina, setValorGastoGasolina] = useState(0);

    const handleDistanciaChange = (Number) => {
        setDist(parseFloat(Number));
    };
    const handleEtanolChange = (Number) => {
        setEta(parseFloat(Number));
    };
    const handleGasChange = (Number) => {
        setGas(parseFloat(Number));
    };

    const calcularGastoEtanol = () => {
        const litrosNecessarios = dist / 9;
        const valorGasto = litrosNecessarios * v_eta;
        setValorGastoEtanol(valorGasto);
    };

    const calcularGastoGasolina = () => {
        const litrosNecessarios = dist / 11;
        const valorGasto = litrosNecessarios * v_gas;
        setValorGastoGasolina(valorGasto);
    };

    return (
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{name}</Text>
            </View>
            <View>
                <View style={styles.horizontal}>
                    <Text>Distância Km: </Text>
                    <TextInput
                        style={styles.textBlue}
                        onChangeText={handleDistanciaChange}
                        value={dist}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.horizontal}>
                    <Text>Valor Etanol R$: </Text>
                    <TextInput
                        style={styles.textBlue}
                        onChangeText={handleEtanolChange}
                        value={v_eta}
                        keyboardType="numeric"
                        onBlur={calcularGastoEtanol}
                    />
                </View>
                <View style={styles.horizontal}>
                    <Text>Valor Gasolina R$: </Text>
                    <TextInput
                        style={styles.textBlue}
                        onChangeText={handleGasChange}
                        value={v_gas}
                        keyboardType="numeric"
                        onBlur={calcularGastoGasolina}
                    />
                </View>
                <View style={styles.horizontal}>
                    <Text style={[styles.textBlue, valorGastoEtanol < valorGastoGasolina ? styles.textGreen : styles.textRed]}>
                        Valor Gasto Etanol: {valorGastoEtanol.toFixed(2)}</Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={[styles.textBlue, valorGastoEtanol > valorGastoGasolina ? styles.textGreen : styles.textRed]}>
                        Valor Gasto Gasolina: {valorGastoGasolina.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    );
}
