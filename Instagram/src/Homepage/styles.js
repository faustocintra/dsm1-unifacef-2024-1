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
    margin: 10, 
    marginleft: 200,
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
    width: '100%',
    height: '200px',
    margin: 10, 
    paddingLeft: 20,
    paddingRight: 20,
    resizeMode: 'contain',
  },
  fotoIcones:{
    flexDirection: 'row',
    paddingRight: 50,
    position: 'relative',
  },
  stories:{
    flexDirection: 'row',
    padding: 2,
  },
  feed:{
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'space-between',
    margin: 2,
    height: '500',
    width: '100%',
  }
})

export default styles