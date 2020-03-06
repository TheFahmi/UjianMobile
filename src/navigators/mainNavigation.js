import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'

// import component
import Login from '../screens/login'
import TabNavigation from './tabNavigation'
import Home from '../screens/home'

const Stack = createStackNavigator()

const MainNavigation = () => {
    // const auth = AsyncStorage.getItem('username')

    return (
        <Stack.Navigator initialRouteName="login" headerMode="none">
            <Stack.Screen name = 'login' component = {Login}/> 
            <Stack.Screen name = 'feed' component = {TabNavigation}/>
        </Stack.Navigator>
    )
}

export default MainNavigation