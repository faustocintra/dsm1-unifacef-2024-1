import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './style';

const Card = ({title, children}) => {
    return <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.children}>{children}</Text>
        </View>
};



export default Card