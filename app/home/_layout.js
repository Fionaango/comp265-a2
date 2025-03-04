import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIndex from './index';
import ItemDetail from './[itemId]';
import Details from './details';

const Stack = createStackNavigator();

export default function HomeLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeIndex} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
