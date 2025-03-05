import React, { createContext, useState } from 'react';

export const JournalContext = createContext();

export function JournalProvider({ children }) {
  const [journals, setJournals] = useState([]);

  const addJournal = (newEntry) => {
    setJournals((prev) => [...prev, newEntry]);
  };

  const deleteJournal = (key) => {
    setJournals((prev) => prev.filter((entry) => entry.key !== key));
  };

  const deleteAllJournals = () => {
    setJournals([]);
  };

  return (
    <JournalContext.Provider
      value={{
        journals,
        setJournals,
        addJournal,
        deleteJournal,
        deleteAllJournals,
      }}
    >
      {children}
    </JournalContext.Provider>
  );
}
