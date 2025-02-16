import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function AdminRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth" replace />; // Если не авторизован — на страницу логина
    }

    if (user.role !== "admin") {
        return <Navigate to="/" replace />; // Если не админ — на главную
    }

    return children;
}
