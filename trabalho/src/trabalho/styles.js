// Importa a biblioteca de estilos do React Native
import { StyleSheet } from 'react-native';

// Define os estilos que serão usados no aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#841584',
    color: '#fff',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

// Exporta os estilos para serem usados em outros arquivos
export default styles;
