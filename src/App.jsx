import {Outlet, RouterProvider} from "react-router-dom";
import { router } from "./routes/router.jsx";
import Header from "./components/common/Header/Header.jsx";
import FooterMobile from "./components/common/FooterMobile/FooterMobile.jsx";
import {UserProvider} from "./context/UserContext.jsx";

export default function App() {
    return (
        <UserProvider>
            <Header/>
            <main className='wrapper-container'>
                <Outlet/>
            </main>
            <FooterMobile/>
        </UserProvider>
    )
}