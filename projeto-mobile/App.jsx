import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card 
        userName={"Lucas Rodrigues Cintra"} 
        userCode={"24302"}
        grade1={8.5}
        grade2={9.0}
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
