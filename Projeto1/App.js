import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';

export default function App() {
  return (
    <View style={styles.container}>
            <Text style={styles.text}>Olá Mundo!</Text>
            <StatusBar style="auto"/>
            <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>

            <Student title="Média">
            <Text>Nota do 1º bimestre: </Text>
            <Text>Nota do 2º bimestre: </Text>
            <Text>Média: </Text>
            </Student>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
