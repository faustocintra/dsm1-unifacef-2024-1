import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import MeuApp from "./src/MeuApp";
import SobreMim from "./src/SobreMim";
import Curso from "./src/Curso";
import Instituicao from "./src/Instituicao";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptinos={{backgroundColor:'red'}
      }>
      <Stack.Screen name="Meu App" component={MeuApp} />
      <Stack.Screen name="Sobre Mim" component={SobreMim} />
      <Stack.Screen name="Curso" component={Curso} />
      <Stack.Screen name="Instituicao" component={Instituicao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
