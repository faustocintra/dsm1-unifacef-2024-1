import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card:{
        borderRadius:16,
        borderColor: '#FFA500',
        borderWidth: 2,
        backgroundColor: '#FFFFA0',
        padding: 16,
        marginTop: 10,
        shadowOffset: 5,
        elevation: 2,
        shadowOpacity: 10,
        shadowOffset: 10
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25
    },
    grade: {
        color: '#3755FA',
    },
})

export default styles;