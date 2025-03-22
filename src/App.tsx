import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Documents from './Documents'
import Settings from './Settings'
import { NavigationContainer } from '@react-navigation/native'
import { Image } from 'react-native'

import HomeIcon from '../assets/home.png'
import HomeFocusedIcon from '../assets/home_focused.png'
import DocumentsIcon from '../assets/documents.png'
import DocumentsFocusedIcon from '../assets/documents_focused.png'
import SettingsIcon from '../assets/settings.png'
import SettingsFocusedIcon from '../assets/settings_focused.png'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let icon
            if (route.name === 'Home') {
              icon = focused ? HomeFocusedIcon : HomeIcon
            } else if (route.name === 'Documents') {
              icon = focused ? DocumentsFocusedIcon : DocumentsIcon
            } else if (route.name === 'Settings') {
              icon = focused ? SettingsFocusedIcon : SettingsIcon
            }
            return <Image source={icon} style={{ width: 25, height: 25 }} resizeMode="contain" />
          },
          tabBarActiveTintColor: '#0000FF',
          tabBarInactiveTintColor: '#000000',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Documents" component={Documents} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
