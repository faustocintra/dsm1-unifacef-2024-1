import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alunos from './src/Alunos.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Alunos nome="teste" nota1={10} nota2={5} faltas={3} />
      <StatusBar style="auto" />
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
