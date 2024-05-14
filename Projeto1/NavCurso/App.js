import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./src/Homepage";
import AboutMe from "./src/AboutMe";
import Courses from './src/Courses'
import Institution from './src/Institution'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meu App" component={Homepage}></Stack.Screen>
        <Stack.Screen name="AboutMe" component={AboutMe}></Stack.Screen>
        <Stack.Screen name="Courses" component={Courses}></Stack.Screen>
        <Stack.Screen name="Institution" component={Institution}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
