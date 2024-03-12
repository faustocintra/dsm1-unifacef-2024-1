import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card'
import Student from './Student';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, mundo!</Text>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>
      <Student name="Enzo" grade1={7} grade2={8} >Centro Universitário Municipal de Franca</Student>
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