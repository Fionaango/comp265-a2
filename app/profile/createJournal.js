import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateJournal({ navigation }) {
  const [text, setText] = useState('');
  const { journals, setJournals } = useContext(JournalContext);

  const handleAddJournal = () => {
    if (text.trim()) {
      const newJournal = { id: Date.now(), content: text.trim() };
      setJournals([...journals, newJournal]);
      setText('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Journal</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter journal content"
        multiline
      />
      <Button title="Add Journal" onPress={handleAddJournal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    minHeight: 80,
    marginBottom: 12
  }
});
