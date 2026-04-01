import { useState } from "react";
import { getItem } from "../helpers/local-storage";
import { USERS } from "../helpers/common";
import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function authenticateUser(username, password) {
    const users = getItem(USERS);
    const userInfo = users.find((user) => user.email === username && user.password === password);
    if (userInfo) {
      setUser({
        username: userInfo.email,
        name: userInfo.name,
      });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  return <AuthContext value={{ user, authenticateUser, logout }}>{children}</AuthContext>;
}
