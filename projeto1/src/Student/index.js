import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Student = ({ name, grade1, grade2 }) => {
    const media = (grade1 + grade2) / 2;

    return (
        <View style={styles.students}>
            <View style={styles.titleContainer}>
            <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.grade}>{grade1}</Text>
            <Text style={styles.grade}>{grade2}</Text>
            <Text style={styles.media}>{media}</Text>
        </View>
    );
};

export default Student