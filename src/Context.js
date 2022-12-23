import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState(false);

  return (
    <Context.Provider value={{ news, setNews }}>{children}</Context.Provider>
  );
};
