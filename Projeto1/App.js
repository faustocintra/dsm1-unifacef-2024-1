import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Card from './src/Card'
import Student from './src/Student';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Card title="UNI-FACEF">Centro Universitario Municipal de Franca</Card>
      </View>
      <View style={styles.body}>
        <Student name="Luiz" grade1={8} grade2={10}></Student>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  body: {
    alignItems: 'center',
  },
});
