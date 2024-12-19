import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUserLogged(JSON.parse(data));
      console.log("useeffect");
    }
  }, []);

  const login = (user) => {
    try {
      localStorage.setItem("user", "dovrei essere uno user");
      setUserLogged(user);
      console.log(user);
      console.log("ho cliccato login");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUserLogged(null);
  };

  return (
    <UserContext.Provider value={{ login, logout, userLogged, setUserLogged }}>
      {children}{" "}
    </UserContext.Provider>
  );
}
