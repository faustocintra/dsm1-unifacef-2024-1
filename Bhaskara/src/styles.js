import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#ffffff',
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    solutionContainer: {
      marginTop: 20,
      padding: 20,
      borderRadius: 8,
      backgroundColor: '#f5f5f5',
    },
    solution: {
      fontSize: 18,
    },
  });

export default styles