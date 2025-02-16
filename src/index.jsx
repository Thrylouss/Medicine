import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import {router} from "./routes/router.jsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
)
