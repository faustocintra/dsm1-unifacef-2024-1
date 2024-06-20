import React from "react";
import {View,Text,Pressable,TextInput,Button} from "react-native";
import styles from './styles'
import { Image } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
                <View style={styles.uppart}>
                    <View >
                        <FontAwesome6  name="instagram" size ={100} color='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'/>
                    </View>
                    <View style={styles.inputstorage}>
                        <TextInput style={styles.input} placeholder="Nome de usuário, Email ou núm..."/>
                        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
                        <Button style={styles.button} title="Entrar" onPress={() => navigation.navigate('Homepage')}/>
                    </View>
                    
                </View>

  
                <View styles={styles.bottom}>
                    <View style={styles.bottomSection}>
                    <Pressable style={styles.botaoCriar}>Criar uma nova conta</Pressable>
                    <Text style={styles.bottomText}>Thiago Correia Azarias</Text>
                    </View>
                </View>
        </View>
    );
}

