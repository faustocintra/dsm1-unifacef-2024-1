import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'



const Login = () => {
  const navigation = useNavigation();

  const handleEntrarPress = () => {
    navigation.navigate('Feed');
  };

  return (
    <LinearGradient
      colors={['#B870A5', '#EDF6FA', '#D6FADE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.backgroundGradient}
    >
        <View style={styles.container}>
        <StatusBar backgroundColor='#FFF' translucent={false} />
        <View style={styles.topContainer}>
        <Text style={styles.logingText}>Português (Brasil)</Text>
        </View>
          <Image
            source={require('../assets/logo-insta.png')}
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
  
        <TouchableOpacity style={styles.loginButton} onPress={handleEntrarPress}>
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
        {/* <Image
            source={require('../assets/logo-meta.png')}
            style={styles.logo}
          /> */}

            
        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Brenda Paulino de Araujo</Text>
          </TouchableOpacity>
        </View>
  
      </View>
      </LinearGradient>
  );
};

export default Login;