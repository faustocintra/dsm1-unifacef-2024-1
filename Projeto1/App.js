import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aluno from './src/Student';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Aluno nomeAluno="Pedro" grade1={8.5} grade2={7.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontWeight: 'bold',
    fontSize: 30
  }

});
