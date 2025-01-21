import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userExists, setUserExists] = useState(false);

    return (
        <UserContext.Provider value={{ userExists, setUserExists }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
