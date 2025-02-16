import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userExists, setUserExists] = useState(() => !!localStorage.getItem('user'));

    useEffect(() => {
        const checkUser = () => {
            const user = localStorage.getItem('user');
            setUserExists(!!user);
        };

        window.addEventListener("storage", checkUser);
        return () => window.removeEventListener("storage", checkUser);
    }, []);

    return (
        <UserContext.Provider value={{ userExists, setUserExists }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
