import styles from './styles.module.css';
import 'boxicons';
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/images/LOGO.png';
import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar.jsx";
import {useUser} from "../../../context/UserContext.jsx";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const { userExists, setUserExists } = useUser();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setActiveCategory(null);
    };

    // Проверяем наличие пользователя в localStorage при загрузке компонента
    useEffect(() => {
        const user = localStorage.getItem('user');
        setUserExists(!!user); // true, если пользователь существует
    }, [setUserExists]);

    // Обработчик для перехода в зависимости от состояния авторизации
    const handleClick = () => {
        if (userExists) {
            navigate('/profile');
        } else {
            navigate('/auth');
        }
    };

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.container}>
                <div className={styles.asideLeft}>
                    <img src={logo} className={styles.logo} alt="Logo" onClick={() => navigate('/')} />
                    <box-icon color="white" name={isSidebarOpen ? 'x' : 'menu'} onClick={toggleSidebar}></box-icon>
                </div>
                <div className={styles.asideCenter}>
                    <input type="text" placeholder="Поиск товаров" />
                    <box-icon color="#c8c8d1" name="search"></box-icon>
                </div>
                <div className={styles.asideRight}>
                    {userExists &&
                        <>
                            <div onClick={() => navigate('/basket')}>
                                <box-icon color="white" type="solid" name="basket"></box-icon>
                            </div>
                            <div onClick={() => navigate('/favourite')}>
                                <box-icon color="white" type="solid" name="heart"></box-icon>
                            </div>
                        </>
                    }
                    <div onClick={handleClick}>
                        <box-icon color="white" type="solid" name="user"></box-icon>
                    </div>
                </div>
            </div>
            {isSidebarOpen && <div className={styles.overlay}></div>}
            <SideBar isOpen={isSidebarOpen} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
    );
}
