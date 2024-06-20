import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagram: {
    flex: 1,
    resizeMode: 'contain',
    height: 500,
    width: 100,
  },
  iconesSuperiores: {
    flex: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30
  },
  fotos:{
    width: 100, 
    height: 100, 
    borderRadius: 60,
    margin: 10, 
    borderWidth: 5,
    borderTopColor: '#F514B4',
    borderColor:'#F57414',
    borderBottomColor: '#F4B206',
  }
 

})

export default styles