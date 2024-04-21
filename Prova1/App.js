import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cotacao from './src/cotacao';
import Cot from './src/cotacao';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cot></Cot>
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
