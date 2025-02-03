import styles from './styles.module.css'
import {Link} from "react-router-dom";

export default function ProfileCard(){


    return (
        <>
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
                    <p>Финансы</p>
                    <div>
                        <div className={styles.asideCenterItem}>
                            <box-icon name='credit-card-front' type='solid' color='grey'></box-icon>
                            <p>Способ оплаты</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}