import React from "react";
import { Text,View, StyleSheet } from "react-native";

const Card = ({title, children}) => {
    return <View style={styles.card}>
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.content}>{children}</Text>
        </View>
        
    
}
const styles = StyleSheet.create ({
    card:{
        borderWidth: 3,
        padding: 10,
        borderRadius:8,
        borderColor: '#000FF',
        backgroundColor: '#87CEFA'
    },
    titleContainer: {
        borderBottom: 1,
        borderBottomColor: '#000000',
        marginBottom: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    children: {
        fontSize: 16
    }
})
export default Card