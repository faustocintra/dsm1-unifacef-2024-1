import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Curso() {
  const { navigate } = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curso</Text>
      <Image source={require("../assets/images/curso-image.png")} resizeMode="contain" style={styles.image} />

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Ionicons name="book" size={24} color="#0b0e10" />
          <Text>Engenharia de Software</Text>
        </View>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
  },
  infoContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginBottom: 20,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    fontSize: 18,
    color: " #0b0e10 ",
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
