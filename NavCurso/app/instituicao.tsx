import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Instituicao() {
  const { navigate } = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instituição</Text>
      <Image source={require("../assets/images/unifacef-logo.png")} resizeMode="contain" style={styles.image} />

      <View style={styles.infoContainer}>
        <Text>Uni-FACEF</Text>
        <Text>Centro Universitário de Franca</Text>
        <Text>Telefone:</Text>
        <Text>(16) 3713-3000</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigate("/")}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#344f8a",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "#f9a826",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
