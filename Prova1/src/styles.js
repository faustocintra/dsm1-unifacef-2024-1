/*
5. Faça as seguintes melhorias estilísticas:
    a) O componente de texto criado na letra a) da Etapa 2 deverá ter fonte tamanho 25 
e uma cor diferente de preto;
    b) Os componentes de texto criados nas letras b), d) e f) da Etapa 2 deverão ter fonte 
em itálico;
    c) O componente de texto criado na letra g) da Etapa 2 deverá ter fonte em negrito;
    d) O componente Cotacao deverá ter uma cor de fundo diferente de branco, com 
espaçamento interno de 12.

*/

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 12, 
        backgroundColor: '#f2f2f2', 
        justifyContent: 'center',
    },
    title: {
        fontSize: 25, 
        color: 'navy', 
    },
    italicText: {
        fontStyle: 'italic',  
    },
    boldText: {
        fontWeight: 'bold', 
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    output: {
        marginTop: 10,
        fontSize: 16,
        color: 'blue',
    }
});


export default styles;