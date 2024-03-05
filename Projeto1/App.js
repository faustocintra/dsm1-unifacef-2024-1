import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './src/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee5e5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* SCSS HEX
$platinum: #dee5e5ff;
$cambridge-blue: #9dc5bbff;
$mint: #17b890ff;
$hookers-green: #5e807fff;
$dark-green: #082d0fff;*/}
