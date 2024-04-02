import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import  styles from './styles';

export default function Form() {

    const [state,setState] = React.useState({
        area: '',
        altura: '',
        tipo: ''
    })

    const {
        base,
        altura,
        tipo 
    } = state
    
    const handleBaseTextChange = text => setState({...state, base: text})
    const handleAlturaTextChange = text => setState({...state, altura: text})
    
    function handleTipoTextChange(text) {
        setState({...state, tipo: text})
    }

    function handleButtonPress() {
        
    }
    
    return (
        <View>
            <Text>Calculadora de área para formas geométricas planas</Text>
            <View style={styles.horizontal}>
                <Text>Base</Text>
                <TextInput 
                    style={styles.textInput}
                    onTextChange={handleBaseTextChange}/>
            </View>
            <View style={styles.horizontal}>
                <Text>Altura</Text>
                <TextInput 
                    style={styles.textInput}
                    onTextChange={handleAlturaTextChange}/>
            </View>
            <View style={styles.horizontal}>
                <Text>Tipo (R, T ou E)</Text>
                <TextInput 
                    style={styles.textInput}
                    onTextChange={handleTipoTextChange}/>
            </View>
            <View style={styles.horizontal}>
                <Button>Calcular</Button>
            </View>
            <View style={styles.horizontal}>
                <Text>Área: </Text>
                <Text>Estado: {JSON.stringify(state)}</Text>
            </View>
        </View>
    )
}