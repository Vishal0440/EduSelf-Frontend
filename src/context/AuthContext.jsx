// src/context/AuthProvider.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ helps handle initial state delay

  // ✅ Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ✅ Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("Users", JSON.stringify(user));
    } else {
      localStorage.removeItem("Users");
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("Users", JSON.stringify(userData)); // ✅ immediate save
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("Users");
  };

  // ✅ While loading from localStorage, avoid flashing logout state
  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
