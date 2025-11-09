import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("mockToken");
        if (token) {
            setUser({ username: "admin" });
        }
    }, []);

    const login = (username, password) => {
        if (username === "admin" && password === "123456") {
            const token = "mock-jwt-token";
            localStorage.setItem("mockToken", token);
            setUser({ username });
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("mockToken");
        setUser(null);
    };

    // Simulate silent token refresh
    useEffect(() => {
        if (!user) return;
        const interval = setInterval(() => {
            localStorage.setItem("mockToken", "refreshed-mock-jwt");
        }, 10000); // every 10 seconds
        return () => clearInterval(interval);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
