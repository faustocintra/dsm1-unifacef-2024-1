// Importando libs
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando código da src
import Login from './src/Login'; 
import HomeScreen from './src/HomeScreen'; 

const Stack = createNativeStackNavigator(
);

const App = () => {
  return (
    <NavigationContainer>
      {/* 
        Declarando navegação entre páginas. Temos a página de Login, e o Feed,
        onde todos os posts dos usuários se encontram
      */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*
  Trabalho feito com auxílio de alguns colegas de classe (não se aplica ao código relacionado a prova). 
  Portanto, ocorreram algumas similaridades, código comentado para estudo próprio e facilitar alteração 
  quando necessário.
*/