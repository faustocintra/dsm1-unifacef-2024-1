import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image , Pressable} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './style'
import { LogoInstagram } from '../Image';



export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      {/*O texto do portugues brasil*/}
      <Text style={{color: "#9AA4B5" }}>Português (Brasil)</Text>
      <Image style={styles.imageLogo} source={ LogoInstagram } />
      {/*Input do email numero ou nome de usuario*/}
      <TextInput
       style={styles.input}
       placeholder="Nome de usúario, email ou numero de telefone" />
      {/*Input da senha*/}
       <TextInput
       style={styles.input}
       placeholder="Senha" />

      <StatusBar style="auto" />
      {/*Botão de Login*/}
      <Pressable onPress={() => navigation.navigate('FirstPage')}  style={styles.buttonLogin}><Text style={{color: "#DCDDE5"}} >Entrar</Text></Pressable>
      {/*Botão de esquecer a senha*/}
      <Pressable> <b><Text style={{color: "#1D1D1D"}}>Esqueceu a senha ?</Text></b></Pressable>
      {/*Botão de criar nova conta*/}
      <Pressable style={styles.buttonNewAccount}><Text style={{color: "#304BE5"}} >Criar nova conta</Text></Pressable>
      <FontAwesome6 name="meta" size={24} color="black" /> 
      {/*Logo da Meta*/}
      <Text>Meta</Text>
      <Text style={{color: "#304BE5" }}>Paulo Eduardo Martins Dutra  24009</Text>
    </View>
  );
}
