// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userState, setUserState] = useState({
    phoneNumber: '',
    isAuthenticated: false,
    // selectedState: '',
    // selectedLanguage: '',
    selectedPackage: null,
    paymentStatus: 'pending', // 'pending', 'completed', 'failed'
    // Add other state variables as needed
  });

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
