import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './src/card';
import Student from './src/student/index'
import Viagem from './src/viagem/index'
import Bhaskara from './src/Bhaskara/index'

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card title="Unifacef">Centro universitario</Card>
      {/* <Student name={"Igor"} primeiraNota={9} segundaNota={8} faltas={10}/>
      <Viagem distancia={100} precoEtanol={4.50} precoGasolina={5.00} />
      <Viagem distancia={200} precoEtanol={4.60} precoGasolina={5.10} />
      <Viagem distancia={150} precoEtanol={4.70} precoGasolina={5.20} />
      <Viagem distancia={180} precoEtanol={4.80} precoGasolina={5.30} /> */}
      <Bhaskara/>
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
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'blue',
    color: 'white'
  }
});