import React from "react";
import {View,Text,Pressable,TextInput,Button} from "react-native";
import styles from './styles'
import { Image } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Homepage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 2}}>
                <Image source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png' }} style={styles.instagram}></Image>
                <AntDesign style={styles.icones} name="hearto" size ={30} color="black"/>    
                <FontAwesome5 style={styles.icones} name="facebook-messenger" size={24} color="black" />
            </View>
            <View style={styles.stories} >
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={styles.fotos} source={ 'https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg' } />
                         <Text style={{ textAlign: 'center' }}>Seu story</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={styles.fotos} source={ 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' } />
                         <Text style={{ textAlign: 'center' }}>Dorothy</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={styles.fotos} source={ 'https://thumbs.dreamstime.com/z/happy-man-okay-sign-portrait-white-background-showing-31418338.jpg' } />
                         <Text style={{ textAlign: 'center' }}>Jorge</Text>
                    </View>     
            </View>   

            <View style={styles.feed}> 
                    <Image style={styles.fotosFeed} source={ 'https://media.istockphoto.com/id/523150985/photo/full-body-portrait-of-a-handsome-young-man-smiling.jpg?s=612x612&w=0&k=20&c=dWBzZLrPBOkzk3LG7CKMUPCMe40cWclIidOvNg2_mVw=' } />
                    <View style={styles.fotoIcones}>
                        <FontAwesome5 style={{ marginLeft: 5, marginRight: 5}} name="heart" size={20} color="black" />
                        <Feather style={{ marginLeft: 5, marginRight: 5}} name="message-circle" size={20} color="black" />
                        <FontAwesome5 style={{ marginLeft: 5, marginRight: 5}} name="paper-plane" size={20} color="black" />
                        <Feather style={{ position: 'absolute', right: 1, alignSelf: 'center' , marginRight:10 }} name="bookmark" size={20} color="black" />
                    </View> 
                    <View>
                        <Text style={{ marginLeft: 5, position: 'relative' }}>
                            Curtido por 15 pessoas
                            <br></br>
                            Sei la
                        </Text>
                    </View>
            </View>
        </View>
    );
}