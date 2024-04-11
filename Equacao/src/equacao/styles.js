import { StyleSheet } from 'react-native';

// Estilos para o componente App
const styles = StyleSheet.create({
  // Estilo do container principal
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1', 
    padding: 20, 
  },
  // Estilo do titulo
  title: {
    fontSize: 24, 
    marginBottom: 20, 
    color: '#2c3e50', 
    fontWeight: 'bold', 
  },
  // Estilo do campo de entrada
  input: {
    width: '80%', 
    height: 40, 
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    borderRadius: 5, 
    marginBottom: 10, 
    paddingHorizontal: 10, 
  },
  // Estilo do container dos botoes
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
    marginBottom: 20, 
  },
  // Estilo da solucaoo
  solution: {
    fontSize: 18, 
    color: '#2c3e50', 
  },
});

export default styles; // Exporta os estilos
