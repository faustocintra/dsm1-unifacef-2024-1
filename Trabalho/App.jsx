import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/components/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calculadora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344f8a',
    alignItems: 'center',
    paddingTop: 100,
  },
});
