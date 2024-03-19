import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viagem from './src/Viagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Viagem viagem="JERIQUAQUARA" distancia={1000} pGasolina={100} pEtanol={9} ></Viagem>
      <StatusBar style="auto" />
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
