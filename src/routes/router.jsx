import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage.jsx";
import AuthPage from "../pages/Auth/AuthPage.jsx";
import BasketPage from "../pages/Basket/BasketPage.jsx";
import App from "../App.jsx";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage.jsx";
import ProductPage from "../pages/Product/ProductPage.jsx";
import FavouritePage from "../pages/Favourite/FavouritePage.jsx";
import ProfilePage from "../pages/Profile/ProfilePage.jsx";
import ProtectedRoute from "../context/ProtectedRoute.jsx";
import PurchasesPage from "../pages/Purchases/PurchasesPage.jsx";
import AdminPage from "../pages/Admin/AdminPage.jsx";
import AdminRoute from "../context/AdminRoute.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // Обернули все страницы в компонент App
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/admin",
                element: (
                    <AdminRoute>
                        <AdminPage/>
                    </AdminRoute>
                ),
            },
            {
                path: "/product/:productTitle",
                element: <ProductPage />,
            },
            {
                path: "/auth",
                element: <AuthPage />,
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/favourite",
                element: (
                    <ProtectedRoute>
                        <FavouritePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/purchases",
                element: (
                    <ProtectedRoute>
                        <PurchasesPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/basket",
                element: (
                    <ProtectedRoute>
                        <BasketPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "*", // Обработчик для всех остальных путей
                element: <NotFoundPage />,
            },
        ],
    },
]);
