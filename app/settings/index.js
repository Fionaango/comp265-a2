import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.content}>Adjust your preferences here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  content: { fontSize: 18 }
});
