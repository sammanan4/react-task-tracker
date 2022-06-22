import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logout: () => {},
  login: (username, password) => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.getItem("isLoggedIn") === "true"
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, logout: logout, login: login }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
