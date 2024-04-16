import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aluno from './src/Aluno'

export default function App() {
  return (
    <View style={styles.container}>
      <Aluno nome="Silvino da Silva" nota1={6.6} nota2={7.8} faltas={16} />
      <Text>-------------------------------</Text>
      <Aluno nome="Orkutilson de Oliveira" nota1={6.1} nota2={8.3} faltas={22} />
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
