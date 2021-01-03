import React, { createContext, useState } from "react";

export const globalContext = createContext();

const GlobalContextProvider = (props) => {
  const [filter, setFilter] = useState("all");
  const [drawer, setDrawer] = useState(false);
  const [auth, setAuth] = useState({
    isAuth: true,
    error: null,
    token: null,
  });

  return (
    <globalContext.Provider
      value={{
        filter,
        setFilter,
        drawer,
        setDrawer,
        auth,
        setAuth,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
