import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    students: {
        borderWidth: 1,
        borderRadius: 16,
        color: '#FFA500',
        borderWidth: 2,
        borderColor: '#FFA500',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius:2,
        elevation: 1,
        marginLeft:5,
        marginRight: 5,
        marginTop:10,
        backgroundColor: '#FFFFED',
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 5,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    grade: {
        color: '#87CEFA',
        fontSize: 20,
    },
    media: {
        color: '#87CEFA',
        fontSize: 20,
    }

});

export default styles

