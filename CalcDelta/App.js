// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EquacaoSegundoGrau from './src/Trabalho';


const App = () => {
  return (
    <View style={styles.container}>
      <EquacaoSegundoGrau />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text:{
    fontWeight:"bold",
    fontSize:30,
    }
});