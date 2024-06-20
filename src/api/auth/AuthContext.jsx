import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types"; // Optional: Only if you want to add prop type validation

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
    }),
    [isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Optional: PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
