import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Card from './src/Card';
import Student from './src/Student'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card title="UNI-FACEF"> Centro Universitário Municipal de Franca</Card>
      <Student name='Gabriel Leme' nota1={10}  nota2={8}></Student>
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
    fontStyle: 'italic',
    fontSize: 30
  }
});
