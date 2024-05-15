import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    padding: 10,
    color: 'mediumblue'
  },
  info: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  logo: {
    marginBottom: 20,
  },
  logoImage: {
    width: 675, 
    height: 200,
    aspectRatio: 1, // Mantenha a proporção da imagem (largura:altura = 1:1)
  }
})

export default styles
