import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormCalculadora from './FormCalculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FormCalculadora />
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
