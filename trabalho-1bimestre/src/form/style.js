import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        width:100,
        borderColor: '#888',
        borderWidth: 1,
        textAlign:'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems:'center'
    },
    element: {
        marginRight:5
    },
    result:{
        maxWidth:110
    }

})

export default styles