import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card  from './src/Card';
import Student from './src/Student';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} > Olá, mundo!!</Text>
      <StatusBar style="auto" />
      <Student title="Uni-FACEF">Centro Universitário Municipal de Franca</Student>
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
