import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    students: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#FFA500',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius:2,
        elevation: 1,
        marginLeft:5,
        marginRight: 5,
        marginTop:10,
        backgroundColor: '#FFFF00',
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 5,
    },
    name: {
        fontSize: 25,
        paddingLeft:5,
        fontWeight: 'bold'
    },
    grade:{
        fontSize: 16,
        paddingLeft:5,
        color:'#0000FF'
    }
});

export default styles
