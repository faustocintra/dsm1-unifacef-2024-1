import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default styles;
