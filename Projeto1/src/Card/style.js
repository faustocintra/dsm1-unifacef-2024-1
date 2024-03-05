import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#0000FF',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius:2,
        elevation: 1,
        marginLeft:5,
        marginRight: 5,
        marginTop:10,
        backgroundColor: '#87CEFA',
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 5,
    },
    title: {
        fontSize: 30,
        paddingLeft:5
    },
    children:{
        fontSize: 16,
        paddingLeft:5
    }

});

export default styles
