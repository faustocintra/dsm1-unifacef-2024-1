import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Sobre() {
  const { navigate } = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>

      <Image
        source={require("../assets/images/sobre-image.png")}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Ionicons name="person" size={24} color="#0b0e10" />
          <Text>Lucas Rodrigues Cintra</Text>
        </View>
        <View style={styles.info}>
          <Ionicons name="call" size={24} color="#0b0e10" />
          <Text>16 99209-7544</Text>
        </View>

        <View style={styles.info}>
          <Ionicons name="mail" size={24} color="#0b0e10" />
          <Text>lucasrcintra10@hotmail.com</Text>
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
    marginBottom: 10,
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
