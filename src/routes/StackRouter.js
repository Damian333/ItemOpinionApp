import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { DetailsScreen } from '../screens/DetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator()

export const StackRouter = () => {
  // Initial route
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
      />
      <Stack.Screen
        name={'DetailsScreen'}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  )
}
