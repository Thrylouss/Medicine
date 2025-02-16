import {Outlet, RouterProvider} from "react-router-dom";
import { router } from "./routes/router.jsx";
import Header from "./components/common/Header/Header.jsx";
import FooterMobile from "./components/common/FooterMobile/FooterMobile.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import {AuthProvider} from './context/AuthContext.jsx'
import Footer from "./components/common/Footer/Footer.jsx";

export default function App() {
    return (
        <UserProvider>
            <AuthProvider>
                <div className='page'>
                    <Header/>
                    <main className='wrapper-container'>
                        <Outlet/>
                    </main>
                    <Footer/>
                    <FooterMobile/>
                </div>
            </AuthProvider>
        </UserProvider>
    )
}