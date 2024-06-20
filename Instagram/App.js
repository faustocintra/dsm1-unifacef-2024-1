import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/screens/LoginScreen";
import Inicio from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "white"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerShown: false
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
