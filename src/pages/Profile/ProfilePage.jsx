import styles from './styles.module.css'
import {Link} from "react-router-dom";
import image1 from "../../assets/images/products/1.webp";
import image2 from "../../assets/images/products/Без названия (1).png";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import ProfileCard from "../../components/Profile/ProfileCard.jsx";

export default function ProfilePage(){

    const items = [
        {
            id: 1,
            title: 'title a;sd lkas lkdnasl dnasjk ndkj anskdj naskj dnkajsn dkjasn kjd asd as das das das das d',
            description: 'description',
            price: 1346361,
            liked: false,
            image: image1,
            rating: 5.0,
            rateCount: 10,
            discount: 62,
        },
        {
            id: 2,
            title: 'title',
            description: 'description',
            price: 141466,
            liked: false,
            image: image2,
            rating: 5.0,
            rateCount: 10,
            discount: 0
        },
    ]


    return (
        <>
            <div className={styles.container}>
                <div className={styles.asideLeft}>
                    <ProfileCard/>
                    <div className={styles.banner}>
                        <img src={image1} alt=""/>
                    </div>
                </div>
                <div className={styles.asideRight}>
                    <div className={styles.asideTop}>
                        <Link to={'/favourite'} className={styles.asideCenter}>
                            <div className={styles.asideTitle}>
                                <h2>Избранное</h2>
                                <p>2 товара</p>
                            </div>
                            <box-icon name='heart' color='grey' size='md'></box-icon>
                        </Link>
                        <Link to={'/purchases'} className={styles.asideCenter}>
                            <div className={styles.asideTitle}>
                                <h2>Покупки</h2>
                                <p>Пока нет</p>
                            </div>
                            <box-icon name='cart' color='grey' size='md'></box-icon>
                        </Link>
                    </div>
                    <div className={styles.asideRecent}>
                        <h2>Недавно смотрели</h2>
                        <div className={styles.asideRecentContainer}>
                            {items.map(item => <ProductCard key={item.id} item={item}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}