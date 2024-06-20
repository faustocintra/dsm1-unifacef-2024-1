import React from "react";
import {View,Text,Pressable,TextInput,Button} from "react-native";
import styles from './styles'
import { Image } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Homepage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png' }} style={styles.instagram}></Image>
                <AntDesign style={styles.iconesSuperiores} name="hearto" size ={30} color="black"/>    
            </View>
            <View style={{flexDirection: 'row'}} >
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={styles.fotos} source={ 'https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg' } />
                         <Text style={{ textAlign: 'center' }}>Seu story</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={styles.fotos} source={ 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' } />
                         <Text style={{ textAlign: 'center' }}>Flor</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={styles.fotos} source={ 'https://thumbs.dreamstime.com/z/happy-man-okay-sign-portrait-white-background-showing-31418338.jpg' } />
                         <Text style={{ textAlign: 'center' }}>Jacinto</Text>
                    </View>     
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