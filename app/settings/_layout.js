import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsIndex from './index';

const Stack = createStackNavigator();

export default function SettingsLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsIndex} />
    </Stack.Navigator>
  );
}
