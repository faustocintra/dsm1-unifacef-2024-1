import { StyleSheet, View } from "react-native";
import Viagem from "./src/Viagem";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Viagem distancia={100} precoEtanol={4} precoGasolina={5.0} />
      <Viagem distancia={200} precoEtanol={4.2} precoGasolina={4.8} />
      <Viagem distancia={150} precoEtanol={4.7} precoGasolina={4.5} />
      <Viagem distancia={120} precoEtanol={3.2} precoGasolina={4.2} />
    </View>
  );
}

