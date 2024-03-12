import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './style';

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
      </View>
    </View>
  );
}