import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card'
import Student from './src/Student';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, mundo!</Text>
      <StatusBar style="auto" />
      <Card title="Uni-Facef">Centro Universitário Municipal de Franca</Card>
      <Student name="brenda" grade1={10} grade2={6}></Student>
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
  text: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
