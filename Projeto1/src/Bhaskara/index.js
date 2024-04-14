import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from './style'

export default function Bhaskara() {
    //usei o state para poder usar o valor das variaveis quando eu mudar seus estados
    const [state, setState] = React.useState({
        a: '',
        b: '',
        c: ''
    });
    const [delta, setDelta] = React.useState();
    const [resultX1, setResultX1] = React.useState();
    const [resultX2, setResultX2] = React.useState();

    const { a, b, c } = state;

    const handleaTextChange = text => setState({ ...state, a: text });
    const handlebTextChange = text => setState({ ...state, b: text });
    const handlecTextChange = text => setState({ ...state, c: text });

    function handleButtonPress() {
        const deltaValue = Math.pow(b, 2) - (4 * a * c);

        //Caso o valor seja negativo fiz um if para mostrar que o valor é invalido
        if (deltaValue < 0) {
            setDelta('Delta negativo');
        //Caso o valor seja positivo ele irá fazer a conta
        } else {
            setDelta(deltaValue);
            setResultX1((-b + Math.sqrt(deltaValue)) / (2 * a));
            setResultX2((-b - Math.sqrt(deltaValue)) / (2 * a));
        }
    }

    return (
        <View>
            <Text>Calculadora de Bhaskara</Text>
            <View style={styles.horizontal}>
                <Text>a</Text>
                <TextInput style={styles.textInput} value={a} onChangeText={handleaTextChange} />
            </View>
            <View style={styles.horizontal}>
                <Text>b</Text>
                <TextInput style={styles.textInput} value={b} onChangeText={handlebTextChange} />
            </View>
            <View style={styles.horizontal}>
                <Text>c</Text>
                <TextInput style={styles.textInput} value={c} onChangeText={handlecTextChange} />
            </View>
            <View style={styles.horizontal}>
                <Button title={"Calcular"} onPress={handleButtonPress} />
            </View>
            <View>
                {/* usei o typeof para exibir somente o Text result quando for necessario */}
                {typeof delta === 'number' ? (
                    <View>
                        <Text>Delta: {delta}</Text>
                        <Text>Result X1: {resultX1}</Text>
                        <Text>Result X2: {resultX2}</Text>
                    </View>
                ) : (
                    <Text>Delta: {delta}</Text>
                )}
            </View>
        </View>
    );
}
