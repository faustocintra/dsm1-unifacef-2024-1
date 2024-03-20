import React from 'react';
import { View, StyleSheet } from 'react-native';
import Aluno from './src/Aluno';

const App = () => {
  return (
    <View style={styles.container}>
      <Aluno nome="João" nota1={7} nota2={8} faltas={15} />
      <Aluno nome="Maria" nota1={5} nota2={6} faltas={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
