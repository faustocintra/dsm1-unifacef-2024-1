import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  photo: {
    width: 200, // Ajuste o tamanho da largura conforme necessário
    height: 100, // Ajuste o tamanho da altura conforme necessário
    resizeMode: "contain", // Redimensionar a imagem para caber dentro dos limites especificados
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  backButtonContainer: {
    backgroundColor: "blue", 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 20, 
  },
  textButton: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold", 
    textAlign: "center", 
  },
});

export default styles;
