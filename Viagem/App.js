import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Viagem from './src/Viagem'

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Viagem destino="São Paulo" distancia={400} etanol={3.47} gasolina={5.07} />
          <Viagem destino="Caldas Novas" distancia={640} etanol={3.85} gasolina={4.89} />
          <Viagem destino="São José do Rio Preto" distancia={220} etanol={3.32} gasolina={4.98} />
          <Viagem destino="Batatais" distancia={55} etanol={4.68} gasolina={4.75} />
          <Viagem destino="Rifaina" distancia={60} etanol={4.10} gasolina={4.88} />
          <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
