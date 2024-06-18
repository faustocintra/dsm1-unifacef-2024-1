import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom right, #EBC2FA, #EDF6FA,#D6FADE)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#9AA4B5',
        padding: 10,
        color: "#9AA4B5"
      },
      buttonLogin:{
        width: 180,
        height: 30,
        margin: 12,
        backgroundColor: "#304BE5",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonNewAccount:{
        width: 180,
        height: 30,
        margin:30,
        borderWidth: 1,
        backgroundColor: "#F5EDFA",
        borderColor: "#304BE5",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageLogo:{
        width: 180,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop:20
      }
  })
export default styles