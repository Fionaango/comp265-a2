import React, { useState, useContext } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from '../_layout'; 
import sharedStyles, { primaryColor } from '../sharedStyles';

export default function FriendStatusScreen() {
  const { isDark } = useContext(ThemeContext);
  const { userId } = useLocalSearchParams();
  const [friendId, setFriendId] = useState('');
  const [loading, setLoading] = useState(false);
  const [friendStatus, setFriendStatus] = useState('');

  const handleSubmit = () => {
    if (!friendId.trim()) return;
    setLoading(true);
    setFriendStatus('');
    setTimeout(() => {
      setFriendStatus(`Friend "${friendId}" is doing great today!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        sharedStyles.container,
        isDark && sharedStyles.darkBackground,
        { paddingBottom: 30 },
      ]}
    >
      <View style={styles.formContainer}>
        <TextInput
          style={[sharedStyles.input, isDark && sharedStyles.darkInput]}
          placeholder="Enter friend's ID"
          placeholderTextColor={isDark ? '#CCC' : '#888'}
          value={friendId}
          onChangeText={setFriendId}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={sharedStyles.blackButton}
          onPress={handleSubmit}
          disabled={loading || !friendId.trim()}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={sharedStyles.blackButtonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>

      {friendStatus ? (
        <Text style={[styles.statusText, isDark && sharedStyles.darkText]}>
          {friendStatus}
        </Text>
      ) : null}

      <View style={[styles.section, isDark && styles.darkSection]}>
        <Text style={[styles.sectionTitle, isDark && sharedStyles.darkText]}>
          Friends’ IDs
        </Text>
        <TouchableOpacity style={styles.rowContainer} onPress={() => { }}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="user-plus" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && sharedStyles.darkText]}>
              Add New ID
            </Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer} onPress={() => { }}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="users" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && sharedStyles.darkText]}>
              View Existing IDs
            </Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  statusText: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  darkSection: {
    backgroundColor: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopColor: '#EEE',
    borderTopWidth: 1,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcon: {
    marginRight: 10,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
});

