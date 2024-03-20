import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card'
import Aluno from './src/Aluno';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, mundo!</Text>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>
      <Aluno name="Ricardo de Lima" initialGrade1={0.0} initialGrade2={0.0} /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30
  }
});