// context/EqubContext.jsx
import React, { createContext, useContext, useState } from "react";
import { equbDummyData } from "../db/data";

const EqubContext = createContext();

export const useEqub = () => useContext(EqubContext);

export const EqubProvider = ({ children }) => {
  const [equbs, setEqubs] = useState(equbDummyData);

  return (
    <EqubContext.Provider value={{ equbs, setEqubs }}>
      {children}
    </EqubContext.Provider>
  );
};
