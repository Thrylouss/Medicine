import styles from './styles.module.css'
import Confirmation from "../../../UI/Confirametion/Confirmation.jsx";

export default function Footer()
{
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <div>
                            <p className={styles.text}>© 2023 Все права защищены</p>
                            <a href='#' className={styles.text}>Политика конфиденциальности</a>
                        </div>
                        <div className={styles.social}>
                            <a href="#">
                                <box-icon type='logo' name='telegram'></box-icon>
                            </a>
                            <a href="#">
                                <box-icon name='instagram-alt' type='logo'></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}