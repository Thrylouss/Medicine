import styles from './styles.module.css'

export default function AuthPage() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.authForm}>
                    <p className={styles.title}>Войти профиль</p>
                    <input className={styles.inputField} type="text" placeholder="Логин"/>
                    <input className={styles.inputField} type="password" placeholder="Пароль"/>
                    <div className={styles.checkbox}>
                        <input type="checkbox"/>
                        <p>Я согласен с правилами использования</p>
                    </div>
                    <button className={styles.buttonLogin}>Войти</button>
                </div>
            </div>
        </div>
    )
}