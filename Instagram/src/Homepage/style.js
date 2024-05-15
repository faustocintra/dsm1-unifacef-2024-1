import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    padding: 10
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },
  createAccount: {
    width: '90%',
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 90
  },
  buttonTextCreate: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
  metaLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

export default styles;
