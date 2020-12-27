import React, { createContext, useState } from "react";

export const filterContext = createContext();

const FilterContextProvider = (props) => {
  const [filter, setFilter] = useState("all");

  return (
    <filterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {props.children}
    </filterContext.Provider>
  );
};

export default FilterContextProvider;
