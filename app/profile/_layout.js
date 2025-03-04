import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileIndex from './index';
import Account from './account';
import CreateJournal from './createJournal';

const ProfileStack = createStackNavigator();

export default function ProfileLayout() {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileIndex">
      <ProfileStack.Screen
        name="ProfileIndex"
        component={ProfileIndex}
        options={{ title: 'Profile Home' }}
      />
      <ProfileStack.Screen
        name="Account"
        component={Account}
        options={{ title: 'Account Details' }}
      />
      <ProfileStack.Screen
        name="CreateJournal"
        component={CreateJournal}
        options={{ title: 'New Journal' }}
      />
    </ProfileStack.Navigator>
  );
}
