import React, { createContext, useState } from "react";

export const ContextData = createContext();
export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [baseUrl, setbaseUrl] = useState("http://localhost:3000/users/");
  return (
    <ContextData.Provider
      value={{
        data,
        setData,
        isPending,
        setIsPending,
        baseUrl,
        setbaseUrl,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
