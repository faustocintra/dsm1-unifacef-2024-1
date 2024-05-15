import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import Curso from "./src/Curso";
import Sobre from "./src/Sobre";
import Instituicao from "./src/Instituicao";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#00bbff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Meu App" component={Home} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
