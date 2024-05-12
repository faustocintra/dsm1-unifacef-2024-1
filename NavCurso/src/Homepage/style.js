import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f7',  // Light gray background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 120,
        paddingTop: 160,
        flex:0,
    },
    button: {
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#6b9080',
        width: 150
    },
    text: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      header: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 22
      },
})

export default styles