import React from 'react';
import { View, StyleSheet } from 'react-native';
import Viagem from './src/Viagem';

const App = () => {
  return (
    <View style={styles.container}>
      <Viagem distancia={100} precoEtanol={4.50} precoGasolina={5.80} />
      <Viagem distancia={200} precoEtanol={4.40} precoGasolina={5.70} />
      <Viagem distancia={150} precoEtanol={4.60} precoGasolina={5.90} />
      <Viagem distancia={120} precoEtanol={6.55} precoGasolina={4.85} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default App;
