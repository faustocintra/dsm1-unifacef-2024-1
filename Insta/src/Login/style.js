import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom right, #EBC2FA, #EDF6FA, #D6FADE)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  textInput: {
    height: 45, 
    margin: 10, 
    borderWidth: 1,
    borderRadius: 10, 
    borderColor: '#7A8DA0', 
    padding: 12, 
    color: "#7A8DA0", 
    backgroundColor: '#FFFFFF', 
  },
  loginButton: {
    width: 200, 
    height: 40, 
    margin: 12,
    backgroundColor: "magenta", 
    borderRadius: 4, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 25, 
    marginTop: 25, 
  }
});

export default styles;