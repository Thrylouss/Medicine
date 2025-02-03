import styles from './styles.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useUser} from "../../../context/UserContext.jsx";

export default function FooterMobile(){
    const { userExists } = useUser();
    const navigate = useNavigate();

    const handleClick = () => {
        if (userExists) {
            navigate('/profile');
        } else {
            navigate('/auth');
        }
    };

    return (
        <>
            <div className={styles.footer}>
                <Link  to={'/'}>
                    <box-icon color='grey' type='solid' name='home'></box-icon>
                </Link>
                {userExists &&
                    <>
                        <Link  to={'/basket'}>
                            <box-icon color='grey' type='solid' name='basket'></box-icon>
                        </Link>
                        <Link  to={'/'}>
                            <box-icon color='grey' type='solid' name='heart'></box-icon>
                        </Link>
                    </>
                }
                <div onClick={handleClick}>
                    <box-icon color='grey' type='solid' name='user'></box-icon>
                </div>
            </div>
        </>
    )
}