import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false} />
      <View style={styles.topContainer}>
      <Text style={styles.logingText}>Português (Brasil)</Text>
      </View>
        <Image
          source={require('./src/assets/logo-insta.png')}
          style={styles.logo}
        />
      

      <TextInput
        placeholder='Nome de usuário, email ou número de telefone'
        style={styles.input}
      />
      <TextInput
        placeholder='Senha'
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.logingText}>Entrar</Text>

      </TouchableOpacity>

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.newAccButton}>
        <Text style={styles.newAcc}>Criar nova conta</Text>

      </TouchableOpacity>
      <Image
          source={require('./src/assets/logo-meta.png')}
          style={styles.logo}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems:  'center',
    justifyContent: 'center'
  },
  topContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50, 
    marginBottom: 50
  },
  logo:{
    marginBottom: 100
  },
  input:{
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#62629d',
    color: '#62629d'
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'center',
    marginTop: 10
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#0000ff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  logingText:{
    color: '#ffffff'
  },
  newAcc:{
    color: '#0000ff'
  },
  newAccButton:{
    backgroundColor: '#F4F3F3',
    marginTop: '30%',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#0000ff',
    borderWidth: 1
  }
});
