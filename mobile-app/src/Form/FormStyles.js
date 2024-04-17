// importa o pacode de estilo do react-native
import { StyleSheet } from "react-native";

// Cria um componente de estilo
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

// Exporta o componente de estilo
export default styles;