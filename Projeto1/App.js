import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './src/Card'
import Aluno from './src/Aluno';
import Viagem from './src/Viagem';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>
      <Aluno name="Ricardo de Lima" initialGrade1={0.0} initialGrade2={0.0} />
      <Viagem name="Calculo Viagem" distancia={0.0} valor_etanol={0.0} valor_gas={0.0} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30
  }
});