import styles from './styles.module.css'
import {useState} from "react";

export default function ProductCard({item}){
    const [liked, setLiked] = useState(item.liked);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div className={styles.container}>
            <img className={styles.itemImage} src={item.image} alt=""/>
            <div onClick={() => handleClick()} className={styles.itemLike}>
                <box-icon color='black' type={liked ? 'solid' : 'regular'}  name='heart'></box-icon>
            </div>
            <div className={styles.itemInfo}>
                <p className={styles.itemPrice}>{item.price}</p>
                <div className={styles.itemInfoProduct}>
                    <p>{item.title.slice(0, 30)} </p>
                    <p className={styles.itemGrey}> </p>
                </div>
                <div className={styles.itemInfoProduct}>
                    <p>{item.rating}</p>
                    <p className={styles.itemGrey}> / {item.rateCount} оценок</p>
                </div>
            </div>
        </div>
    )
}