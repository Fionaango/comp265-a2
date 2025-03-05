import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { JournalContext } from '../context/journalContext'; 
import sharedStyles from '../sharedStyles'; 

export default function CreateJournal() {
  const router = useRouter();
  const [text, setText] = useState('');
  const { journals, setJournals } = useContext(JournalContext);

  const handleAddJournal = () => {
    if (text.trim()) {
      const newJournal = { key: Date.now().toString(), content: text.trim() };
      setJournals([...journals, newJournal]);
      setText('');
      router.back(); 
    }
  };

  return (
    <View style={[sharedStyles.container]}>
      <Text style={[sharedStyles.header, styles.title]}>Create a New Journal</Text>
      <TextInput
        style={[sharedStyles.input, { minHeight: 80 }]}
        value={text}
        onChangeText={setText}
        placeholder="Enter journal content"
        multiline
      />
      <TouchableOpacity style={sharedStyles.blackButton} onPress={handleAddJournal}>
        <Text style={sharedStyles.blackButtonText}>Add Journal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
});
