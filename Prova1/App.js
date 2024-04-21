import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cotacao from './src/Cotacao';

const App = () => {
  return (
    <View style={styles.container}>
      <Cotacao></Cotacao>{/* chamada do component de cotacao */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default App;
