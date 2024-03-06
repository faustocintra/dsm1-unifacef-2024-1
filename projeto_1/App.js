// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo </Text>
      <StatusBar style="auto" />
      <Card title="Uni-FACEF">Centro Universitário Municipal de Franca</Card>
      <View style={styles.students}>
        <Students name="Danilo" grade1={5} grade2={10} />
        <Students name="Éder" grade1={5} grade2={10} />
        <Students name="Igor" grade1={5} grade2={10} />
        <Students name="Breno" grade1={5} grade2={10} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
