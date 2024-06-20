import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  instagram: {
    position: 'top-left',
    width: 150,
    height: 90,
    marginRight: 110, 
    resizeMode: 'contain',
  },
  icones: {
    padding: 5,
    marginRight: 5
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
  },
  fotosFeed:{
    width: 550,
    height: 450,
    margin: 10, 
    paddingLeft: 20,
    paddingRight: 20,
    resizeMode: 'contain',
  },
  fotoIcones:{
    flexDirection: 'row',
    paddingRight: 50,
    position: 'relative',
    width: 280,
  },
  stories:{
    flexDirection: 'row',
    padding: 2,
  },
  feed:{
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
    height: 550,
    width: 550,
    padding: 2,
  }
})

export default styles