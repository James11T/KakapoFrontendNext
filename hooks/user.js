import { useState, useContext, createContext } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    kakapo_id: "",
    display_name: "",
    token: "",
    isAuthenticated: false,
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUser = () => useContext(userContext);

export { UserProvider, useUser };
