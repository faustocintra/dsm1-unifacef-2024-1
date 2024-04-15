import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 10,
      borderColor: 'orange',
      borderWidth: 2,
      margin: 10,
    },
    name: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    infoContainer: {
      marginTop: 10,
    },
    media: {
      marginTop: 10,
      color: 'white',
    },
    card: {
        borderRadius: 16,
        borderColor: '#0000FF',
        backgroundColor: '#87CEFA',
        padding: 10 
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },
    children: {
        fontSize: 16
    }
  });

export default styles