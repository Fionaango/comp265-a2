import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { JournalContext } from '../context/journalContext';
import { ThemeContext } from '../_layout';
import sharedStyles from '../sharedStyles';

export default function ItemDetailScreen() {
  const { item } = useLocalSearchParams();
  const router = useRouter();
  const { journals } = useContext(JournalContext);
  const { isDark } = useContext(ThemeContext);

  const entry = journals.find((e) => e.key === item);

  if (!entry) {
    return (
      <View style={[sharedStyles.container, isDark && sharedStyles.darkBackground, styles.center]}>
        <Text style={[sharedStyles.text, isDark && sharedStyles.darkText]}>No entry found.</Text>
        <TouchableOpacity onPress={() => router.back()} style={sharedStyles.blackButton}>
          <Text style={sharedStyles.blackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        sharedStyles.container,
        isDark && sharedStyles.darkBackground,
        { paddingBottom: 30 },
      ]}
    >
      <Text style={[sharedStyles.header, isDark && sharedStyles.darkHeader, styles.center]}>
        {entry.name} Details
      </Text>
      <Text style={[sharedStyles.text, isDark && sharedStyles.darkText, styles.detail]}>
        Time: {entry.time}
      </Text>
      {entry.note ? (
        <Text style={[sharedStyles.text, isDark && sharedStyles.darkText, styles.detail]}>
          Note: {entry.note}
        </Text>
      ) : null}
      <TouchableOpacity onPress={() => router.back()} style={sharedStyles.blackButton}>
        <Text style={sharedStyles.blackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginVertical: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
