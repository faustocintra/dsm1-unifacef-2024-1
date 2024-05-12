import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./src/Homepage";
import Sobre from './src/Sobre'
import Curso from "./src/Curso";
import Instituição from "./src/Instituição";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meu app" component={Homepage} />
        <Stack.Screen name="Sobre Mim" component={Sobre} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Instituição" component={Instituição} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
