import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomIcon = ({ name, size, color, style }) => {
    return (
        <View style={style}>
            <Ionicons name={name} size={size} color={color} />
        </View>
    );
};

export default CustomIcon;
