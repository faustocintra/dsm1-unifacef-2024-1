import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Meu App</Text>
      <TouchableOpacity
        style={styles.button}
        title="Sobre Mim"
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text>Sobre Mim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        title="Curso"
        onPress={() => navigation.navigate("Curso")}
      >
        <Text>Curso</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        title="Instituição"
        onPress={() => navigation.navigate("Instituicao")}
      >
        <Text>Instituição</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#00bbff",
    borderRadius: 5,
  },
});
