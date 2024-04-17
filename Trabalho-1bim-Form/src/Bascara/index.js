import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './src/Bascara';

export default function Bascara(){
    // Declarando as variáveis de estado usando o useState para manipular as variáveis
    const [state, setState] = React.useState({
        a:'',
        b:'',
        c:'',
        result
    })
// Criei as variáveis de estado somente-leitura usando a desestruturação
    const{
        a,
        b,
        c,
        result
    } = state

    //Funções para pegar o valor de cada input
    const InputA = function (text){
        setState({...state, a: text})
    } 
    const InputB = function (text){
        setState({...state, b: text})
    } 
    const InputC = function (text){
        setState({...state, c: text})
    }



    //Função que vai ser chamada ao clicar no button, e juntamente irá calcular o delta  também fazendo uma verificação se o delta é positivo ou negativo
    function clcularButton(){
        // variável auxiliar que vai receber o delta
        let delta

        //variável para receber o x1
        let x1

        //variável para receber o x2
        let x2

        //calculando o delta
        delta = (b ** 2) - (4 * a * c)

        //verificando se delta é menor q zero(numero negativo), caso seja vai enviar um texto de erro no resultado, se não vai prosseguir para o calculo de bhaskara
        if(delta < 0){
            setState({...state, result: 'Delta negativo, não existem raizes reais'})
        }else{

            //calculando o x1
            x1 = (-b + Math.sqrt(delta))/(2*a)

            //calculando o x2
            x2 = (-b - Math.sqrt(delta))/(2*a)

            setState({...state, result: `x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`})

        }

    }

    return(
        <View >
            <Text style={styles.title}>Calculando bhaskara</Text>
            <View style={styles.horizontal}>
                <Text style ={styles.element}>A:</Text>
                <TextInput style={styles.TextInput} onChangeText={InputA}/>
            </View>
            <View style={styles.horizontal}>
                <Text style ={styles.element}>B:</Text>
                <TextInput style={styles.TextInput} onChangeText={InputB}/>
            </View>
            <View style={styles.horizontal}>
                <Text style ={styles.element}>C:</Text>
                <TextInput style={styles.TextInput} onChangeText={InputC}/>
            </View>
            <View>
                <Button title="Calcular" onPress={clcularButton}/>
            </View>
            <View style={styles.result}>
                <Text>Resultado : {result}</Text>
            </View>

        </View>

    )

}