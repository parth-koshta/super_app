import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from '../config/Tab';
const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                {
                    Tabs.map(tab => (
                        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons name={focused ? tab.activeIcon : tab.inactiveIcon} size={size} color={color} />
                            )
                        }} />
                    ))
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;