import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyApp from './src/MyApp'
import SobreMim from './src/SobreMim'
import Curso from './src/Curso';
import Instituicao from './src/Instituicao';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00ff00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="MyApp" component={MyApp} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}