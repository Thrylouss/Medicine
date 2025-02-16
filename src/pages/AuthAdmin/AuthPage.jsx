import styles from './styles.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useUser} from "../../context/UserContext.jsx";
import Confirmation from "../../UI/Confirametion/Confirmation.jsx";

export default function AuthAdminPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [agreement, setAgreement] = useState(false);
    const navigate = useNavigate();
    const { setUserExists } = useUser();

    const handleLogin = () => {
        if (!agreement) {
            alert('Вы должны согласиться с правилами использования!');
            return;
        }

        if (login && password) {
            localStorage.setItem('admin', JSON.stringify({ login, password }));
            setUserExists(true);
            navigate('/admin');
        } else {
            alert('Пожалуйста, заполните все поля!');
        }
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.authForm}>
                    <p className={styles.title}>Войти в профиль</p>
                    <input
                        className={styles.inputField}
                        type="text"
                        placeholder="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        className={styles.inputField}
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Confirmation setAgreement={setAgreement} agreement={agreement}/>
                    <button className={styles.buttonLogin} onClick={handleLogin}>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
}
