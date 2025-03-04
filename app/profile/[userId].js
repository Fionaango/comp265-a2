import React from 'react';
import { View, Text } from 'react-native';

export default function UserProfile({ route }) {
  const { userId } = route.params;
  return (
    <View>
      <Text>User Profile for: {userId}</Text>
    </View>
  );
}
