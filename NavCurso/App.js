import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./src/HomePage";
import Sobre from "./src/Sobre";
import Instituicao from "./src/Instituicao";
import Curso from "./src/Curso";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
