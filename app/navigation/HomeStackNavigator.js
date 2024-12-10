import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import BMIScreen from '../screens/Cards/BMIScreen'
import StepsScreen from '../screens/Cards/StepsScreen'

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="AppointmentScreen" 
        component={AppointmentScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen
        name = "BMIScreen"
        component={BMIScreen}
        options={{headerShown: true, title: 'BMI Entry' }}/>
         <HomeStack.Screen 
        name="StepsScreen" 
        component={StepsScreen} 
        options={{ headerShown: true, title: 'Steps Entry' }} />
        {/* <HomeStack.Screen
        name = "SleepScreen"
        component={SleepScreen}
        options={{headerShown:true, title: 'Sleep Entry'}}/> */}
    </HomeStack.Navigator>
  );
}
