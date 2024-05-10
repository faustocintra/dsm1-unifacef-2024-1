import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/HomePage";
import AboutMe from "./src/AboutMe";
import Course from "./src/Course";
import Institution from "./src/Institution";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
        <Stack.Screen name="AboutMe" component={AboutMe}></Stack.Screen>
        <Stack.Screen name="Course" component={Course}></Stack.Screen>
        <Stack.Screen name="Institution" component={Institution}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}