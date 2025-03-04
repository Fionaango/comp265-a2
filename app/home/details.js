import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Additional Details</Text>
      <Text style={styles.content}>Here are some more details about the home section.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  content: { fontSize: 18 }
});
