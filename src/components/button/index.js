import React from 'react';
import { View, Text, ActivityIndicator, Pressable, StyleSheet } from 'react-native';

export default function Button({ text, textColor, background, action, loading }) {
  const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      width: '100%'
    },
    buttonStyle: {
      borderRadius: 80,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginVertical: 12,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background || '#007bff', 
      opacity: loading ? 0.5 : 1,
      width: '100%',
    },
    buttonText: {
      color: textColor || '#ffffff',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
  })

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.buttonStyle}
        onPress={action}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" size="large" />
        ) : (
          <Text style={styles.buttonText}>
            {text}
          </Text>
        )}
      </Pressable>
    </View>
  )
}

