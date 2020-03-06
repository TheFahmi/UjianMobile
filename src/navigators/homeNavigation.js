import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import component
import Home from '../screens/home'
import Details from '../screens/details'

const Stack = createStackNavigator()

const HomeNavigation = () => {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="homeScreen">
            <Stack.Screen name = 'homeScreen' component = {Home}/>
            <Stack.Screen name = 'detail' component = {Details}/>
        </Stack.Navigator>
    )
}

export default HomeNavigation