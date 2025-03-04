import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { JournalContext } from './context/journalContext';

export default function ProfileIndex({ navigation }) {
  const { journals } = useContext(JournalContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Home</Text>
      <View style={styles.buttonRow}>
        <Button title="Account" onPress={() => navigation.navigate('Account')} />
        <Button title="New Journal" onPress={() => navigation.navigate('CreateJournal')} />
      </View>
      <Text style={styles.subtitle}>Your Journals:</Text>
      <FlatList
        data={journals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.journalItem}>{item.content}</Text>
        )}
        ListEmptyComponent={<Text>No journals yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  subtitle: { fontSize: 18, marginVertical: 8 },
  journalItem: { fontSize: 16, paddingVertical: 4 }
});
