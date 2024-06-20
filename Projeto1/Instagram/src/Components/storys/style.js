import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 2,
    alignItems: "center",
    padding: 2,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  highlight: {
    borderRadius: 55,
  },
  blackBorder: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 55,
  },
  gradient: {
    padding: 4.3, // Espessura da borda do gradiente
    borderRadius: 100, // Ajuste de acordo com a forma da imagem
  },
});
export default styles;
