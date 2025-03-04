import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemDetail({ route }) {
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Detail</Text>
      <Text style={styles.content}>Details for item ID: {itemId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  content: { fontSize: 18 }
});
