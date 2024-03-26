import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viagem from './src/viagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Viagem destino="São Paulo" distancia={400} etanol={3.47} gasolina={5.07} />
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
});
