import { Button, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-web";

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/fototrabalho.jpg")}
        style={styles.image}
      />
      <Text>Sobre Mim</Text>
      <Text>Nome: João Paulo</Text>
      <Text>Telefone: (35)99738-5641</Text>
      <Text>Email: joaofaleirospaulo@gmail.com</Text>
      <Button title="Voltar" onPress={() => navigation.navigate("Meu App")} />
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
  },
});
