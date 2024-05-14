import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        color: 'white',
        marginBottom: 5,
    },
    code: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
    },
    course: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'column',
        padding: 20,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;