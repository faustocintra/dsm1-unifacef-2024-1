import Equa from './src/Calculo';
import { StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
     <Equa/>
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
