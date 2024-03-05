import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Students = ({ name, grade1, grade2 }) => {
    const media = (grade1 + grade2) / 2; // Calcula a média corretamente

    return (
        <View style={styles.students}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.grade}>{grade1}</Text>
            <Text style={styles.grade}>{grade2}</Text>
            <Text style={styles.media}>{media}</Text>
        </View>
    );
};

export default Students;
