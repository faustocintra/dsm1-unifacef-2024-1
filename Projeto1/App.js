import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formulário 1</Text>
      {/* <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <input type="submit" value="Enviar" />
      </form> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#082D0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#dee5e5ff',
  },
});

{/* SCSS HEX
$platinum: #dee5e5ff;
$cambridge-blue: #9dc5bbff;
$mint: #17b890ff;
$hookers-green: #5e807fff;
$dark-green: #082d0fff;*/}
