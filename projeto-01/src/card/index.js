import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Card = ({title, children}) => {
    return(
        <view>
            <text style = {StyleSheet.title}>{title}</text>
            <text style={StyleSheet.children}>{children}</text>
        </view>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        borderColor: '#000000',
        backgroundColor: '#87CEFA',
        padding: 15
    },
    titleConteiner:{
        borderBottomWidth: 1,
        borderBottomColor: '#00000F',
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