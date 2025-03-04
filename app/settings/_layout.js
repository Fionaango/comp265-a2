import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsIndex from './index';

const SettingsStack = createStackNavigator();

export default function SettingsLayout() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsIndex" component={SettingsIndex} options={{ title: 'Settings' }} />
    </SettingsStack.Navigator>
  );
}
