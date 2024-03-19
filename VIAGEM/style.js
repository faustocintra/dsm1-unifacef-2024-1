import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viagem: {
    borderRadius: 16,
    borderColor: '#333333',
    borderWidth: 3,
    backgroundColor:'#f5f5f5',
    padding: 10,
    margin: 10
  },
  viagemContainer: {
    borderBottomWidth: 1,
    borderBottomColor:'#333333',
    marginBottom:5
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333' // Alterando a cor do nome para um tom mais escuro
  },
  viagemText: {
    fontSize: 15,
    color:'#666666' // Alterando a cor do texto para um tom mais escuro
  }
});

export default styles;
