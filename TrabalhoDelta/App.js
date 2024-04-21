import React from 'react';
import { View, StyleSheet } from 'react-native';
import Equacao from './src/delta';

const App = () => {
  return (
    <View style={styles.container}>
      <Equacao></Equacao>{/* chamada do component de delta */}
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
