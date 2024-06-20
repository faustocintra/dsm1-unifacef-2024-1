import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Login from './src/Login'
import Homepage from './src/Homepage';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
