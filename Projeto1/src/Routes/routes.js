import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Travel from "../Pages/Travel";
import Average from "../Pages/Average";
import Home from "../Pages/Home"

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "card" }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen name="average" component={Average} />
      <Stack.Screen name="travel" component={Travel} />
    </Stack.Navigator>
  );
}