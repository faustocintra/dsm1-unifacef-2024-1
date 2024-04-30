import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Homepage from "./src/homepage";
import Details from "./src/details";
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }
      }>
        <Stack.Screen name='Homepage' component={Homepage} />
        <Stack.Screen name='Details' component={Details} />
        

      </Stack.Navigator>
      <StatusBar style="auto"/>
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
