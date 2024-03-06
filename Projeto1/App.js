import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';
import Student from './src/Student'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo</Text>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitario Municipal de Franca</Card>
      <Student nome="ROBERTO" nota1={8} nota2={10}></Student>
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
  text:{
    fontWeight:`bold`,
    fontStyle:'italic',
    fontSize:30
  }
});
