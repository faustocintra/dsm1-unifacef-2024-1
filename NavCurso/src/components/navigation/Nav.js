import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PageInicial } from '../screens/PageInicial';
import { AboutMe } from '../screens/AboutMe';
import { Course } from '../screens/Course';
import { Institution } from '../screens/Institution';

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Página Inicial">
                <Stack.Screen name="Página Inicial" component={PageInicial}/>
                <Stack.Screen name="Sobre Mim" component={AboutMe} />
                <Stack.Screen name="Curso" component={Course} />
                <Stack.Screen name="Instituição" component={Institution} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}