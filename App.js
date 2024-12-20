
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/LoginScreen';
import AppNavigator from './app/navigation/AppNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
    
        <Stack.Screen
  name="Login"
  component={LoginScreen}
  options={{ headerShown: false }}
/>

        <Stack.Screen
  name="AppNavigator"
  component={AppNavigator}
  options={{ headerShown: false }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
