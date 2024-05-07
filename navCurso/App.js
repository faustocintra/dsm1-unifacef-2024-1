import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/home/index";
import Sobre from "./src/sobre/index";
import Curso from "./src/Curso/index";
import Instituicao from "./src/instituicao";

const Nav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4334eb", 
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Nav.Screen name="Home" component={Home} />
        <Nav.Screen name="Sobre" component={Sobre} />
        <Nav.Screen name="Curso" component={Curso} />
        <Nav.Screen name="Instituicao" component={Instituicao} />
      </Nav.Navigator>
    </NavigationContainer>
  );
};

export default App;
