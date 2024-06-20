import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Instagram from './src/instagram'; 
import Detalhes from './src/Detalhes'; 

const Stack = createNativeStackNavigator(
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Oculta a barra de navegação em todas as telas
        }}
      >
        <Stack.Screen name="Instagram" component={Instagram} />
        <Stack.Screen name="Feed" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
