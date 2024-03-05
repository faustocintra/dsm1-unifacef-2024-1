import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Card from './src/Card'
import Students from './src/Students.js';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Ola Mundo!</Text>
      <StatusBar style="auto" />
      <Card title="Centro Universitário Municipal de Franca" children="Card Content" />
      <Students name="Leandro" grade1={5} grade2={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize:30
  }
});
