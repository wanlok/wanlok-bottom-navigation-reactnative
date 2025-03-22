import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Documents from './Documents'
import Settings from './Settings'
import { NavigationContainer } from '@react-navigation/native'
import { GestureResponderEvent, Image, Pressable, View } from 'react-native'

import HomeIcon from '../assets/home.png'
import HomeFocusedIcon from '../assets/home_focused.png'
import DocumentsIcon from '../assets/documents.png'
import DocumentsFocusedIcon from '../assets/documents_focused.png'
import SettingsIcon from '../assets/settings.png'
import SettingsFocusedIcon from '../assets/settings_focused.png'

const Tab = createBottomTabNavigator()

interface ButtonTabBarButtonProps {
  children: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
  accessibilityLabel?: string
}

const options = {
  tabBarButton: (props: ButtonTabBarButtonProps) => <TabBarButton {...props} />,
}

const TabBarButton = ({ children, onPress, accessibilityLabel }: ButtonTabBarButtonProps) => {
  return (
    <Pressable onPress={onPress} accessibilityLabel={accessibilityLabel}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {children}
      </View>
    </Pressable>
  )
}

const size = { width: 24, height: 24 }

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
            return <Image source={icon} style={size} resizeMode="contain" />
          },
          tabBarActiveTintColor: '#0000FF',
          tabBarInactiveTintColor: '#999999',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={options} />
        <Tab.Screen name="Documents" component={Documents} options={options} />
        <Tab.Screen name="Settings" component={Settings} options={options} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
