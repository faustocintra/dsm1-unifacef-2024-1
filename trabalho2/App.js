import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EquacaoSegundoGrau from './EquacaoSegundoGrau';

export default function App() {
  return (
    <View style={styles.container}>
      <EquacaoSegundoGrau></EquacaoSegundoGrau>
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
