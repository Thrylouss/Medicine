import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split(".")[1])); // Декодируем JWT
                setUser(decoded);
            } catch (error) {
                logout();
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setUser(decoded);
        navigate("/admin");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/auth");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
