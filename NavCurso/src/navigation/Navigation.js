import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import SobreMim from '../screens/SobreMim';
import Curso from '../screens/Curso';
import Instituicao from '../screens/Instituicao';

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;
