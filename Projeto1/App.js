import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './src/card';
import Aluno from './src/aluno/index'
import Viagem from './src/viagem/index'

export default function App() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>projeto Mobile</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Card title="Unifacef">Centro universitario</Card>
      <Aluno name={Breno} primeiraNota={8} segundaNota={10} faltas={4}/>
      <Viagem distancia={150} precoEtanol={4.60} precoGasolina={5.69} />
      <Viagem distancia={170} precoEtanol={3.90} precoGasolina={5.20} />
      <Viagem distancia={220} precoEtanol={4.39} precoGasolina={5.49} />
      <Viagem distancia={100} precoEtanol={4.78} precoGasolina={5.80} />
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
