import React, { createContext, useState, useEffect } from "react";
import { getLocalstroage, setLocalstroage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  localStorage.clear();
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    setLocalstroage();
    const { employees } = getLocalstroage();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[UserData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
