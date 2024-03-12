import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Students from './src/Students';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média dos estudantes do Uni-FACEF</Text>
      <StatusBar style="auto" />
      <View style={styles.students}>
        <Students name="Leandro" grade1={9} grade2={10} />
        <Students name="Ana" grade1={2} grade2={10} />
        <Students name="Carlos" grade1={8} grade2={6} />
        <Students name="Lucas" grade1={5} grade2={10} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#00aaf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  students: {
    gap: 20,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 48
  }
});