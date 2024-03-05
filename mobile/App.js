import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from "./src/Card/index.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Card title="UNI-FACEF"> Centers Universitario Municipal de Franca</Card>
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
