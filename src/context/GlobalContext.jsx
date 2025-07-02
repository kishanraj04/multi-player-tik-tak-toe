import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isSearchUser,setIsSearchUser] = useState(false)
  const [isDrawar,setIsDrawar] = useState(false);

  return (
    <GlobalContext.Provider value={{ board, setBoard,isSearchUser,setIsSearchUser,isDrawar,setIsDrawar}}>
      {children}
    </GlobalContext.Provider>
  );
}
