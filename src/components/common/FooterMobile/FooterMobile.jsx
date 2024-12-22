import styles from './styles.module.css'
import {Link} from "react-router-dom";

export default function FooterMobile(){

    return (
        <>
            <div className={styles.footer}>
                <Link  to={'/'}>
                    <box-icon color='grey' type='solid' name='basket'></box-icon>
                </Link>
                <Link  to={'/'}>
                    <box-icon color='grey' type='solid' name='heart'></box-icon>
                </Link>
                <Link to={'/auth'}>
                    <box-icon color='grey' type='solid' name='user'></box-icon>
                </Link>
            </div>
        </>
    )
}