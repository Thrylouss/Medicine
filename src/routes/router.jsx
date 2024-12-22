import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/Home/HomePage.jsx";
import AuthPage from "../pages/Auth/AuthPage.jsx";
import App from "../App.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // Обернули все страницы в компонент App
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/auth",
                element: <AuthPage />
            },
        ],
    },
])

