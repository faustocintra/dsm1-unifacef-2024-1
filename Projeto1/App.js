import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Student from "./src/Student";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Student name={"Leandro"} grade1={8} grade2={6} faltas={21}></Student>
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
    fontSize: 30,
  },
});
