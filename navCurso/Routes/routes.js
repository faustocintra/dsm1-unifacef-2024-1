import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home"
import About from "../Pages/About";
import Class from "../Pages/Class";
import Institution from "../Pages/Institution";

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

            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="class" component={Class} />
            <Stack.Screen name="institution" component={Institution} />
        </Stack.Navigator>
    );
}