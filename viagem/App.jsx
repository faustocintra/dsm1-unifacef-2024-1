import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viagem from './src/components/Viagem';

export default function App() {

  const viagens = [
    { distancia: 100, preco_etanol: 3.5, preco_gasolina: 4.5 },
    { distancia: 200, preco_etanol: 2.2, preco_gasolina: 5.5 },
    { distancia: 300, preco_etanol: 3.5, preco_gasolina: 5.5 },
    { distancia: 400, preco_etanol: 3.5, preco_gasolina: 4.0 },
    { distancia: 500, preco_etanol: 3.5, preco_gasolina: 5.5 },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {viagens.map((viagem, index) => (
        <Viagem key={index} {...viagem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
