import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  // Añadido el estado de carga

    const login = async (email, password) => {
        try {
            setIsLoading(true);  // Activamos la carga
            const res = await fetch("http://localhost:5001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) throw new Error("Login fallido");

            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
            setIsLoading(false);  // Desactivamos la carga
            return data;
        } catch (error) {
            setError("Error en el login. Por favor verifica tus credenciales.");
            setIsLoading(false);  // Desactivamos la carga en caso de error
            console.error("Error en login:", error);
            throw error;
        }
    };

    const register = async (credentials) => {
        try {
            const res = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            if (!res.ok) throw new Error("Registro fallido");

            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
            return data;
        } catch (error) {
            setError("Error en el registro. Intenta nuevamente.");
            console.error("Error en register:", error);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
        setProfile(null);
    };

    const getProfile = async () => {
        try {
            if (!token) throw new Error("No autorizado");

            const res = await fetch("http://localhost:5001/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) throw new Error("No se pudo obtener el perfil");

            const data = await res.json();
            setProfile(data);  // Actualiza el perfil
            return data;
        } catch (error) {
            console.error("Error al obtener perfil:", error);
            throw error;
        }
    };

    return (
        <UserContext.Provider
            value={{
                token,
                email,
                profile,
                login,
                register,
                logout,
                getProfile,
                isLoading,  // Agregamos el estado de carga
                error,      // También el estado de error
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);