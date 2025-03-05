import { Stack } from 'expo-router';
import React, { useContext } from 'react';
import { ThemeContext } from '../_layout';

export default function FriendLayout() {
  const { isDark } = useContext(ThemeContext);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? '#333' : '#FFF',
        },
        headerTintColor: isDark ? '#FFF' : '#333',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="[userId]"
        options={({ route }) => {
          const { userId } = route.params || {};
          return {
            title: userId ? `Friend: ${userId}` : 'Friend',
            headerBackTitle: 'Profile',
            headerBackTitleVisible: true,
          };
        }}
      />
    </Stack>
  );
}
