import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cotacao from './src/components/Cotacao';

export default function App() {
  return (
    <View style={styles.container}>
      <Cotacao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
