import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-web";

const SobreMim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Vinicius-Foto.jpg")}
        style={styles.image}
      />
      <Text>Nome: Vinicius Cintra Ferreira</Text>
      <Text>Telefone: (16)99282-8105</Text>
      <Text>E-mail: Vinicintra3101@outlook.com </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Meu App")}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  btn: {
    backgroundColor: '#1E35C6',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SobreMim;