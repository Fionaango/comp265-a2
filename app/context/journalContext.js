// journalContext.js
import React, { createContext, useState } from 'react';

export const JournalContext = createContext();

export function JournalProvider({ children }) {
  const [journals, setJournals] = useState([]);

  // Add a function to add a single journal entry
  const addJournal = (newEntry) => {
    setJournals((prev) => [...prev, newEntry]);
  };

  // If you have a function to delete a single entry
  const deleteJournal = (key) => {
    setJournals((prev) => prev.filter((entry) => entry.key !== key));
  };

  // If you have a function to delete all
  const deleteAllJournals = () => {
    setJournals([]);
  };

  return (
    <JournalContext.Provider
      value={{
        journals,
        addJournal,       // <--- Provide this
        deleteJournal,    // <--- Provide this if you have it
        deleteAllJournals // <--- Provide if you have it
      }}
    >
      {children}
    </JournalContext.Provider>
  );
}
