import React from 'react'
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(true); //sesión cerrada
    const [user, setUser] = useState(null);

    const login = (newToken) => {
        setToken(newToken);
    };
    const logout =() => {
        setToken(false);
    }


    return (
        <UserContext.Provider value={{ token, login, logout, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);

