import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom right, #EBC2FA, #EDF6FA,#D6FADE)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uppart:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  texto:{
    padding:10
  },
  button:{
    padding:5,
    margin:5,
    backgroundColorcolor:"blue",
    color: 'blue',
    border: '2px solid blue',
  },
  input:{
    textAlign: 'center',
    padding:5,
    margin:5,
    width: 200,
    borderRadius: 10,
    selectionColor: 'blue',
    backgroundColor:"lightgray",
    color: 'black',
    border: '2px solid black',
  },
  inputstorage:{
    paddingTop:100
  },
  icon:{
    color:"black"
  },
  bottom:{
    paddingTop: 50,
  },
  bottomSection:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText:{
    padding:10,
    marginBottom: 50,
  },
  botaoCriar:{
    color: 'blue',
    backgroundColor: 'white',
  }
})

export default styles