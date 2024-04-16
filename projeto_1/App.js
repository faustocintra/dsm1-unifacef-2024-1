// @ts-nocheck
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Equation from './src/Equation/index'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Equation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91abff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
