import styles from "./styles.module.css"
import {Link} from "react-router-dom";

export default function Confirmation({ setAgreement, agreement }) {



    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
            />
            <Link to="#">Я согласен с правилами использования</Link>
        </div>
    )
}