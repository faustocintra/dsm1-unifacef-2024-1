import React from "react";
import {View,Text,Pressable,TextInput,Button} from "react-native";
import styles from './styles'
import { Image } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';

export default function Homepage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.upbar}>
                <Image source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png' }} style={{ resizeMode: 'contain', width: 500, height: 100 }}></Image>

            </View>
                <View >
                    <FontAwesome6  name="instagram" size ={100} color='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'/>
                </View>
                <View style={styles.inputstorage}>
                    <TextInput style={styles.input} placeholder="Nome de usuário, Email ou núm..."/>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
                    <Button title="Entrar" onPress={() => navigation.navigate('Login')}/>
                </View>

                <Text style={styles.texto}>Telefone: 40028922</Text>
                <Text style={styles.texto}>E-mail: email.gmail@gmail.com</Text>   
            
        </View>
    );
}