
import { StyleSheet, Text, View } from 'react-native';
import Abastecimento from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Abastecimento distancia={100} etanol={1} gasolina={2}></Abastecimento>
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
