import { Navigate } from "react-router-dom";
import {useUser} from "./UserContext.jsx";

export default function ProtectedRoute({ children }) {
    const { userExists } = useUser(); // Проверяем, авторизован ли пользователь

    if (!userExists) {
        // Если пользователь не авторизован, перенаправляем на /auth
        return <Navigate to="/auth" replace />;
    }

    return children; // Если авторизован, рендерим вложенные компоненты
}
