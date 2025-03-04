import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileIndex from './index';
import Account from './account';
import CreateJournal from './createJournal';

const Stack = createStackNavigator();

export default function ProfileLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileIndex} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="CreateJournal" component={CreateJournal} />
    </Stack.Navigator>
  );
}
