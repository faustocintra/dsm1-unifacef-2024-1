import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';
import Student from './src/Student';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, Mundo!</Text>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>
      <View style={styles.body}>
        <Student name="Icaro" grade1={7} grade2={9}></Student>
      </View>
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
    fontSize: 30,
    fontStyle: 'italic'
  }
});
