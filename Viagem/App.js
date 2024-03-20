import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Viagem from "./src/Viagem";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Viagem
        viagem="Riberão-Preto"
        distancia={100}
        pGasolina={10}
        pEtanol={7}
      ></Viagem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
