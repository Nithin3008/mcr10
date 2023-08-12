import { createContext, useState } from "react";

export const FilterContext = createContext();
export function FilterProvider({ children }) {
  const [filterOption, setFilterOption] = useState("All");
  const [lowStock, setLowStock] = useState(false);
  const [sortBy, setSortBy] = useState("");

  return (
    <FilterContext.Provider
      value={{
        filterOption,
        setFilterOption,
        lowStock,
        setLowStock,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
