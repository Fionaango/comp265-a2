import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserProfile({ route }) {
  const { userId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.content}>Profile details for user: {userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  content: { fontSize: 18 }
});
