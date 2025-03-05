import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { JournalContext } from '../context/journalContext'; 
import { ThemeContext } from '../_layout';
import sharedStyles, { primaryColor } from '../sharedStyles';

export default function AllJournalId() {
  const { journals, deleteJournal, deleteAllJournals } = useContext(JournalContext);
  const { isDark } = useContext(ThemeContext);
  const [showDetails, setShowDetails] = useState(true);

  const renderItem = ({ item }) => (
    <View style={[styles.journalEntry, isDark && styles.darkJournalEntry]}>
      <Text style={[styles.entryText, isDark && styles.darkText]}>
        {item.name} - {item.time}
        {showDetails && item.note ? `\nNote: ${item.note}` : ''}
      </Text>
      <TouchableOpacity onPress={() => deleteJournal(item.key)} style={styles.deleteButton}>
        <FontAwesome5 name="trash-alt" size={18} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[sharedStyles.container, isDark && sharedStyles.darkBackground]}>
      <View style={[sharedStyles.row, { marginVertical: 0 }]}>
        <Text style={[sharedStyles.switchLabel, isDark && sharedStyles.darkSwitchLabel]}>
          Show Details
        </Text>
        <Switch
          value={showDetails}
          onValueChange={setShowDetails}
          trackColor={{ false: '#ccc', true: primaryColor }}
          thumbColor={showDetails ? '#FFF' : '#f4f3f4'}
        />
      </View>

      <FlatList
        data={journals}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={[sharedStyles.blackButton, { marginVertical: 10 }]}
        onPress={deleteAllJournals}
      >
        <Text style={sharedStyles.blackButtonText}>Delete All Journals</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  journalEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  darkJournalEntry: {
    backgroundColor: '#444',
  },
  entryText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 10,
  },
  darkText: {
    color: '#FFF',
  },
  deleteButton: {
    padding: 5,
  },
});
