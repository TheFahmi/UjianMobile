import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

// import component
import LogOut from '../screens/logout'
import HomeNavigation from './homeNavigation'


const Tab = createBottomTabNavigator()

const LogOutPage = (nav) => {
    return ({ navigation }) => <LogOut navigation={navigation} rootStackNavigation={nav} />
}

const TabNavigation = ({navigation}) => {
    return (
        <Tab.Navigator initialRouteName="home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'home') {
                    iconName = 'home'
                } else if (route.name === 'logout') {
                    iconName = 'restaurant-menu';
                }
                return <Icon name={iconName} size={35} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false
        }}>
            <Tab.Screen name = 'home' component ={HomeNavigation}/>
            <Tab.Screen name = 'logout'>{LogOutPage(navigation)}</Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigation