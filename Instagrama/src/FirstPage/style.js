import { StyleSheet } from 'react-native'


const stylesFirstPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFFFFF',
      },
    icones:{
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10, 
        backgroundColor: '#EFFFFF',
    },
    iconesSuperiores:{
        flex: 1,
        alignItems: 'flex-start',
        margin: 20, 
        backgroundColor: '#EFFFFF',
        flexDirection: 'row', 
        justifyContent: 'right'
    },
    iconesMeio:{

    },
    imageLogoFirstPage:{
        position: 'top-left',
        width: 150,
        height: 90,
        margin: 10, 
        paddingLeft: 20,
        resizeMode: 'contain',
    },
    fotosPerfil:{
        width: 100, 
        height: 100, 
        borderRadius: 60,
        margin: 10, 
        borderWidth: 5,
        borderTopColor: '#F514B4',
        borderColor:'#F57414',
        borderBottomColor: '#F4B206',
    },
    miniFotosPerfil:{
        width: 50 ,
        height: 50 ,
        borderRadius: 25,
        margin: 10, 
        borderWidth: 3,
        borderTopColor: '#F514B4',
        borderColor:'#F57414',
        borderBottomColor: '#F4B206',
        margin:10,
    },
    fotosFeed:{
        width: '95%',
        height: '200px',
        margin: 10, 
        paddingLeft: 20,
        paddingRight: 20,
    }
})
export default stylesFirstPage