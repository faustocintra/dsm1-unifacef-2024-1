import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";

export default function Form() {
    // Aqui eu vou usar o useState para gerenciar e manipular as variaveis que estão dentro do objeto
    const [state, setState] = React.useState({
        a: '',
        b:'',
        c:'',
        result
    })
    //Usando desestruturação, criei variaveis para leitura apenas
    const{a, b, c, result} = state

    //Aqui eu criou funções que vão ser usada para pegar o valor do input, quando os respectivos input's invocarem as funções, ao pegar usamos o setState(do useState) para adicionamos o valor do input ao objeto do useState.
    const InputA = function (text){
        setState({...state, a:text})
    }
    const InputB = function (text){
        setState({...state, b:text})
    }
    const InputC = function (text){
        setState({...state, c:text})
    }
    // Aqui eu vou fazer uma função que vai ser invocado ao clicar no button, essa função vai fazer o calculo usando a fórmula delta = (b ** 2) - (4 * a * c) junto de uma verificação de delta
    function resultButton (){
        //variável auxiliar para receber o delta
        let delta
        //variável auxiliar para receber x1
        let x1
        //variável auxiliar para receber x1
        let x2
        //calculando o delta com as informações do objeto
        delta = (b ** 2) - (4 * a *c)
        //verificando se delta é menor q zero(numero negativo), caso seja vai enviar um texto de erro no resultado, se não vai prosseguir para o calculo de bhaskara
        if(delta < 0){
            setState({...state, result: `não há raizes válidas para a equação de 2º grau`})
        }else{
            x1 = (-b + Math.sqrt(delta))/(2*a)
            x2 = (-b - Math.sqrt(delta))/(2*a)

            setState({...state, result: `x1=${x1.toFixed(1)} ; x2=${x2.toFixed(1)}`})
        }
    }

  return (
    <View>
      <View style={styles.horizontal}>
        <Text style={styles.element}>A:</Text>
        <TextInput style={styles.textInput} onChangeText={InputA}/>
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.element}>B:</Text>
        <TextInput style={styles.textInput} onChangeText={InputB}/>
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.element}>C:</Text>
        <TextInput style={styles.textInput} onChangeText={InputC}/>
      </View>
      <View >
        <Button title="Calcular" onPress={resultButton}/>
      </View>
      <View style={styles.result}>
        <Text>Resultado: {result}</Text>
      </View>
    </View>
  );
}
