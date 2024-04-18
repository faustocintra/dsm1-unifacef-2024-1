import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

export default function Delta() {
    const [state, setState] = React.useState({
        A: '',
        B: '',
        C:'',
        Delta:'',
        ResultadoRaiz1: '',
        ResultadoRaiz2: '',
      })
    const {
        A,
        B,
        C,
        Delta,
        ResultadoRaiz1,
        ResultadoRaiz2,
      } = state

    const handleAChangeText = text => setState({...state, A: text})
    const handleBChangeText = text => setState({...state, B: text})
    const handleCChangeText = text => setState({...state, C: text})

    function handleButtonPress() {
        let ResultadoRaiz1
        let ResultadoRaiz2
        let Delta
        Delta = (B*B) - (4*A*C)
        if(Delta<0){
          ResultadoRaiz1 = 'não há raizes válidas para a equação de 2º grau.'
          ResultadoRaiz2= ''
        }else{
            ResultadoRaiz1= -(B)+Math.sqrt(Delta)/2*C
            ResultadoRaiz2= -(B)-Math.sqrt(Delta)/2*C
        }
        setState({...state, Delta: Delta, ResultadoRaiz1: ResultadoRaiz1, ResultadoRaiz2: ResultadoRaiz2})
      }
      return(
        <View>
            <Text style={styles.title}>Trabalho Terceiro ano MOBILE</Text>
            <View style={styles.texto}>
             <Text style={styles.texto}>Informe A: </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={handleAChangeText}  
                    inputMode="decimal"
                    keyboardType="decimal-pad"
                 />
            </View>
            <View style={styles.texto}>
             <Text style={styles.texto}>Informe B: </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={handleBChangeText}  
                    inputMode="decimal"
                    keyboardType="decimal-pad"
                 />
            </View>
            <View style={styles.texto}>
             <Text style={styles.texto}>Informe C: </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={handleCChangeText}  
                    inputMode="decimal"
                    keyboardType="decimal-pad"
                 />
            </View>
            <View style={styles.botao}>
                 <Button title="Calcular" onPress={handleButtonPress} />
            </View>
            <View style={styles.resultado}>
                  <Text style={styles.resultado}>Delta:  {Delta}</Text>
            </View>
            <View style={styles.resultado}>
                  <Text style={styles.resultado}>x1:  {ResultadoRaiz1}</Text>
            </View>
            <View style={styles.resultado}>
                  <Text style={styles.resultado}>x2:  {ResultadoRaiz2}</Text>
            </View>
        </View>
      )
}