import React from 'react';
import { View, Text } from 'react-native';

export default function ItemDetail({ route }) {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Item Detail for: {itemId}</Text>
    </View>
  );
}
