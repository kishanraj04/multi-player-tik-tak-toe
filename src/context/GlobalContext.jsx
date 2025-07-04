import { createContext, useState } from "react";

export 
t GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isSearchUser,setIsSearchUser] = useState(false)
  const [isDrawar,setIsDrawar] = useState(false);
  const [isRightDrawar,setIsRightDrawar] = useState(false)
  const [isNotification,setIsNotification] = useState(false)
  const [searchUserName, setSearchUserName] = useState("");
  return (
    <GlobalContext.Provider value={{ board, setBoard,isSearchUser,setIsSearchUser,isDrawar,setIsDrawar,isRightDrawar,setIsRightDrawar,isNotification,setIsNotification,searchUserName, setSearchUserName}}>
      {children}
    </GlobalContext.Provider>
  );
}
