import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import FeedScreen from '../screens/FeedScreen'

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Feed: FeedScreen,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);

export default createAppContainer(AppNavigator)
