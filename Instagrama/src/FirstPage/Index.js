import React from 'react';
import stylesFirstPage from './style'
import { Text, View, Image, Pressable} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { InstagramEscrito, GramaPerfil, Flor, Jacinto , Cortador} from '../Image'




export default function FirstPage({navigation}) {
    return (
        <View style={stylesFirstPage.container}>
            {/* Icones superiores */}
            <View style={{flexDirection: 'row'}}>
                        {/*Logo instagram*/}
                        <Image style={stylesFirstPage.imageLogoFirstPage} source={ InstagramEscrito } />
                        <View style={stylesFirstPage.iconesSuperiores}>
                                <FontAwesome5 style={{padding: 5,marginRight: 5}} name="heart" size={32} color="black" />
                                <FontAwesome5 style={{padding: 5}} name="facebook-messenger" size={32} color="black" />
                        </View>
                    <View>      
                </View>
            </View>

             {/* Fotos Pessoas e storys */}
             <View>
                <View style={{flexDirection: 'row'}} >
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={stylesFirstPage.fotosPerfil} source={ GramaPerfil } />
                         <Text style={{ textAlign: 'center' }}>Seu story</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={stylesFirstPage.fotosPerfil} source={ Flor } />
                         <Text style={{ textAlign: 'center' }}>Flor</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                         <Image style={stylesFirstPage.fotosPerfil} source={ Jacinto } />
                         <Text style={{ textAlign: 'center' }}>Jacinto</Text>
                    </View>     
                </View>
             </View>
            {/*Feed*/}   
             <View style={{flexDirection: 'column'}} >
             {/* Mini Imagem perfil*/}                
                <View style={{flexDirection: 'row'}}>
                      <Image style={stylesFirstPage.miniFotosPerfil} source={ Jacinto } />
                      <Text style={{ alignSelf: 'center', padding: 10}}>Jacinto</Text>
                      <Entypo style={{ position: 'absolute', right: 0, alignSelf: 'center' }} name="dots-three-vertical" size={24} color="black" />
                </View>
                {/*Imagem do feed*/}  
                <View>
                    <Image style={stylesFirstPage.fotosFeed} source={ Cortador } />
                    {/*Icones do meio*/}  
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome5 style={{ marginLeft: 5, marginRight: 5}} name="heart" size={32} color="black" />
                        <Feather style={{ marginLeft: 5, marginRight: 5}} name="message-circle" size={32} color="black" />
                        <FontAwesome5 style={{ marginLeft: 5, marginRight: 5}} name="paper-plane" size={30} color="black" />
                        <Feather style={{ position: 'absolute', right: 0, alignSelf: 'center' , marginRight:10 }} name="bookmark" size={32} color="black" />
                    </View>
                    {/*Comentários*/}  
                    <View>
                        <Text style={{ marginLeft: 5, position: 'relative' }}>
                            Curtido por 10 pessoas
                            <br></br>
                            O melhor cortador de grama do instagrama
                        </Text>
                    </View>
                </View>
             </View>

            {/* Icones Inferiores */}
            <View style={stylesFirstPage.icones}>
                <Pressable  onPress={() => navigation.navigate('Login')} >
                    <FontAwesome6 name="house" size={42} color="black" />
                </Pressable>
                <Entypo name="magnifying-glass" size={42} color="black" />
                <MaterialCommunityIcons name="movie-play-outline" size={42} color="black" />
                <Feather name="plus-square" size={42} color="black" />  
            </View>
        </View>
    )
}