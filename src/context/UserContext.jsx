import React from 'react'
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(null); //sesión cerrada
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    

    const login = async (e) => {
        try {
            e.preventDefault()
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, password}),
            });
    
        if (!res.ok) throw new Error("Login fallido");
    
            const data = await res.json();
                setToken(data.token);
                setEmail(data.email);
            } catch (error) {
                console.error("Error en login:", error);
                throw error;
            }
    };
    
    const register = async (credentials) => {
        try {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });
    
        if (!res.ok) throw new Error("Registro fallido");
    
        const data = await res.json();
        setToken(data.token);
        setEmail(data.email);
        } catch (error) {
        console.error("Error en register:", error);
        throw error;
        }
    };
    
    const logout = () => {
        setToken(null);
        setEmail(null);
    };
    
    const getProfile = async () => {
        try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
    
        if (!res.ok) throw new Error("No se pudo obtener el perfil");
    
        const data = await res.json();
        setEmail(data.email); // actualiza el email si no estaba
        return data;
        } catch (error) {
        console.error("Error al obtener perfil:", error);
        throw error;
        }
    };
    
    return (
        <UserContext.Provider
            value={{ token, email, login, register, logout, getProfile }}>
        {children}
    </UserContext.Provider>
    );
    };
    


export const useUser = () => useContext(UserContext);

