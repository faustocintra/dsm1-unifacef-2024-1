import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4edfd',
    padding: 12,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    color: '#349e2b',
    marginBottom: 20,
  },
  italicText: {
    fontStyle: 'italic',
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#adb99f',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  resultText: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
