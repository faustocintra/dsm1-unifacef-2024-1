import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Aluno from "./src/Aluno";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Aluno nome="Arthur" nota1={7.5} nota2={8.5}></Aluno>
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
