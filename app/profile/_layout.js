import { Stack } from 'expo-router';
import React, { useContext } from 'react';
import { ThemeContext } from '../_layout';

export default function ProfileLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen name="account" options={{ title: 'Account' }} />
      <Stack.Screen name="createJournal" options={{ title: 'Create Journal' }} />
      <Stack.Screen name="[alljournalId]" options={{ title: 'All Journal Entries' }} />
    </Stack>
  );
}
