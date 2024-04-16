// @ts-nocheck
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Cotacao from './src/Cotacao';

export default function App() {
  return (
    <View style={styles.container}>
      <Cotacao />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85aa82',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
