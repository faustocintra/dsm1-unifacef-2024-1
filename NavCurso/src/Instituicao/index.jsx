import { Button, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-web";
export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_unifacef_login.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text>Uni-Facef</Text>
      <Text>Telefone:  (16) 3713-4688</Text>
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
