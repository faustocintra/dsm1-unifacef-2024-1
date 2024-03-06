import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';
import Students from './src/Students';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média dos estudantes do Uni-FACEF</Text>
      <StatusBar style="auto" />
      {/* <Card title="Centro Universitário Municipal de Franca" children="Card Content" /> */}
      <View style={styles.students}>
        <Students name="Leandro" grade1={5} grade2={10} />
        <Students name="Leandro" grade1={5} grade2={10} />
        <Students name="Leandro" grade1={5} grade2={10} />
        <Students name="Leandro" grade1={5} grade2={10} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#00aaff',
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