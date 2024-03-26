import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './style';
import Students from '../Students';

export default function Average() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média dos estudantes do Uni-FACEF</Text>
      <StatusBar style="auto" />
      <View style={styles.students}>
        <Students name="Leandro" grade1={9} grade2={10} faltas={10} />
        <Students name="Ana" grade1={2} grade2={3} faltas={2} />
        <Students name="Carlos" grade1={8} grade2={6} faltas={8} />
      </View>
    </View>
  )
}