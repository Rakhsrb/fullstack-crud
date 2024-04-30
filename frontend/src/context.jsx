import React, { createContext, useState } from "react";

export const ContextData = createContext();
export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  return (
    <ContextData.Provider value={{ data, setData, isPending, setIsPending }}>
      {children}
    </ContextData.Provider>
  );
};
