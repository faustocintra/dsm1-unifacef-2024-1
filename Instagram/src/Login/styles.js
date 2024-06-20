import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  arrow: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 30,
    height: 30,
  },
  linguagem: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontSize: 14,
    color: '#999',
  },
  logoInstagam: {
    width: 180,
    height: 60,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'grey',
  },
  btnEntrar: {
    width: '80%',
    height: 50,
    backgroundColor: '#3897f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnTextEntrar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  senhaAlert: {
    color: '#3897f0',
    fontSize: 14,
    marginTop: 10,
  },
  btnCriarConta: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3897f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnTextCriarConta: {
    color: '#3897f0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoMeta: {
    width: 100,
    height: 30,
    marginTop: 50,
  },
});

export default styles;