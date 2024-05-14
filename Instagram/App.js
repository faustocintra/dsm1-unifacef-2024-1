import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/login/index.js";
import Home from "./src/Home/index.js";

const Nav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="Home" component={Home} />
        <Nav.Screen name="Login" component={Login} options={{ title: '' }} />
      </Nav.Navigator>
    </NavigationContainer>
  );
};

export default App;
