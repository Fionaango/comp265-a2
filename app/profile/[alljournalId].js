import React from 'react';
import { View, Text } from 'react-native';

export default function AllJournalDetail({ route }) {
  const { alljournalId } = route.params;
  return (
    <View>
      <Text>All Journal Detail: {alljournalId}</Text>
    </View>
  );
}
