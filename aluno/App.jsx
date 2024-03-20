import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Aluno from "./src/components/Aluno";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Aluno
        userName={"Lucas Rodrigues Cintra"} 
        userCode={"24302"}
        grade1={8.5}
        grade2={9.0}
        faltas={10}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#344f8a",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
