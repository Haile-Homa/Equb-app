import React, { createContext, useContext, useState } from "react";
import { historyDummyData } from "../db/data"; // your real history data

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState(historyDummyData);

  // Optional: you can add functions to add/update history
  const addHistory = (newItem) => {
    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
