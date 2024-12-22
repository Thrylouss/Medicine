import styles from './styles.module.css'
import 'boxicons'
import {Link} from "react-router-dom";
import logo from '../../../assets/images/LOGO.png'
import {useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar.jsx";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Очистка на случай размонтирования
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isSidebarOpen]);

    return (
        <div className='header-wrapper'>
            <div className={styles.container}>
                <div className={styles.asideLeft}>
                    <Link to={'/'}>
                        <img src={logo} className={styles.logo} alt=""/>
                    </Link>
                    <box-icon color='white' name={isSidebarOpen ? 'x' : 'menu'} onClick={toggleSidebar}></box-icon>
                </div>
                <div className={styles.asideCenter}>
                <input type="text" placeholder='Поиск товаров'/>
                    <box-icon color='#c8c8d1' name='search'></box-icon>
                </div>
                <div className={styles.asideRight}>
                    <Link  to={'/'}>
                        <box-icon color='white' type='solid' name='basket'></box-icon>
                    </Link>
                    <Link  to={'/'}>
                        <box-icon color='white' type='solid' name='heart'></box-icon>
                    </Link>
                    <Link to={'/auth'}>
                        <box-icon color='white' type='solid' name='user'></box-icon>
                    </Link>
                </div>
            </div>
            {isSidebarOpen && <div className={styles.overlay}>.</div>}
            <SideBar isOpen={isSidebarOpen} />

        </div>
    )
}