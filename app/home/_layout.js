import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIndex from './index';
import ItemDetail from './[itemId]';
import Details from './details';

const HomeStack = createStackNavigator();

export default function HomeLayout() {
  return (
    <HomeStack.Navigator initialRouteName="HomeIndex">
      <HomeStack.Screen
        name="HomeIndex"
        component={HomeIndex}
        options={{ title: 'Home' }}
      />
      <HomeStack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={({ route }) => ({ title: `Item ${route.params.itemId}` })}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ title: 'More Details' }}
      />
    </HomeStack.Navigator>
  );
}
