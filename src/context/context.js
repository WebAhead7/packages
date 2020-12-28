import React, { createContext, useState } from "react";

export const globalContext = createContext();

const GlobalContextProvider = (props) => {
  const [filter, setFilter] = useState("all");
  const [drawer, setDrawer] = useState(false);

  return (
    <globalContext.Provider
      value={{
        filter,
        setFilter,
        drawer,
        setDrawer,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
