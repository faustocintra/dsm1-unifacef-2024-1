import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-web";

const SobreMim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/eu.jpeg")} style={styles.image} />
      <Text>Nome: Tania Maraiza</Text>
      <Text>Telefone: (16) 99254-1020</Text>
      <Text>E-mail: Taniamaraiza@hotmail.com </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Meu App")}
      >
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  btn: {
    backgroundColor: "#45e",
    padding: 10,
    margin: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default SobreMim;
