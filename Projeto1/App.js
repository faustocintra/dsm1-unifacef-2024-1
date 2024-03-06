import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo!!</Text>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitario Municipal de Franca</Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "Bold",
    fontSize: 30,
  },
});
