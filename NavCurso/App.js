import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'



import MeuApp from "./src/meuApp";
import SobreMim from "./src/sobreMim";
import Curso from "./src/curso";
import Instituicao from "./src/instituicao";

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
        <Stack.Screen name='Meu App' component={MeuApp} />
        <Stack.Screen name='SobreMim' component={SobreMim} />
        <Stack.Screen name='Curso' component={Curso} />
        <Stack.Screen name='Instituição' component={Instituicao} />
        

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
