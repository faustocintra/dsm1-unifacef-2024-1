import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/telas/Home';
import Search from './src/components/telas/Search';
import Reels from './src/components/telas/Reels';
import Activity from './src/components/telas/Activity';
import Profile from './src/components/telas/Profile';
import Login from './src/components/telas/Login';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name === "Home") {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if(route.name === "Search") {
              iconName = focused ? 'search' : 'search-outline';
            } else if(route.name === "Reels") {
              iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline';
            } else if(route.name === "Activity") {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if(route.name === "Profile") {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />
          }
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bottom" component={bottomTabScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
};

export default App;
