import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AllJournalDetail({ route }) {
  const { alljournalId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Detail</Text>
      <Text style={styles.content}>Full details for journal ID: {alljournalId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  content: { fontSize: 18 }
});
