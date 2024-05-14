import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import homepage from "./src/homepage"
import sobre from "./src/sobre"
import instituicao from "./src/instituicao"
import curso from "./src/curso"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homepage" component={homepage} />
        <Stack.Screen name="sobre" component={sobre} />
        <Stack.Screen name="curso" component={curso} />
        <Stack.Screen name="instituicao" component={instituicao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}