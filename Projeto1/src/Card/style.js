import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        borderColor: '#0000FF',
        backgroundColor: '#87CEFA',
        padding: 16,
    },
    titleContainer: {
        backgroundColor: '#0000FF',
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -16,
        marginLeft: -16,
        marginRight: -16,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold' 
    },
    children: {
        fontSize: 16,
    }
});

export default styles;