import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import { JournalProvider } from './context/journalContext';

export default function Layout() {
  return (
    <JournalProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Comp265-a2-chaungo</Text>
        </View>
        <Slot />
      </View>
    </JournalProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#6200EE',
    alignItems: 'center'
  },
  headerText: { color: '#fff', fontSize: 20, fontWeight: 'bold' }
});
