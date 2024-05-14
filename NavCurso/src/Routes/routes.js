import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home"
import Sobre from "../Pages/Sobre";
import Curso from "../Pages/Curso";
import Instituição from "../Pages/Instituição";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "card" }}
    >
      <Stack.Screen
        name="home"
        component={Home}
      />

      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Curso" component={Curso} />
      <Stack.Screen name="Instituição" component={Instituição} />
    </Stack.Navigator>
  );
}