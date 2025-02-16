import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";

export default function ProfileCard() {
    const navigate = useNavigate();
    const { setUserExists } = useUser(); // Добавляем setUserExists из контекста

    const handleLogOut = () => {
        localStorage.removeItem('user'); // Удаляем пользователя
        setUserExists(false); // Обновляем состояние контекста
        navigate('/auth'); // Перенаправляем на страницу логина
    }

    return (
        <div className={styles.container}>
            <div className={styles.asideTop}>
                <div className={styles.asideTopLeft}>
                    <div className={styles.profileIcon}>
                        <box-icon size='md' name='user' type='solid' color='grey'></box-icon>
                    </div>
                    <h3>Пример имени</h3>
                </div>
                <box-icon size='md' name='bell' type='solid' color='grey'></box-icon>
            </div>
            <div className={styles.asideCenter}>
                <p>Доп. Возможности</p>
                <div>
                    <div onClick={handleLogOut} className={styles.asideCenterItem}>
                        <box-icon name='log-out' type='solid' color='grey'></box-icon>
                        <p>Выйти из аккаунта</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
