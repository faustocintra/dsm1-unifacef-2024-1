// src/styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  language: {
    marginBottom: 60,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 60,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#3897f0',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#003569',
    textAlign: 'center',
  },
  createAccountButton: {
    width: '100%',
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderWidth: 1,
    overflow: 'hidden',
  },
  createAccountButtonText: {
    color: '#003569',
    fontWeight: 'bold',
  },
});

export default styles;
