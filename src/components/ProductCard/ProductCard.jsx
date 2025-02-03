import styles from './styles.module.css'
import {useEffect, useState} from "react";
import db from '../../indexDB/cartDB.js'
import {Link, useNavigate} from "react-router-dom";
import {useUser} from "../../context/UserContext.jsx";

export default function ProductCard({item}){
    const [liked, setLiked] = useState(item.liked);
    const [isInCart, setIsInCart] = useState(false);
    const navigation = useNavigate();
    const { userExists } = useUser();


    useEffect(() => {
        async function checkCart() {
            try {
                const existingItem = await db.cart.get(item.id);
                if (existingItem) {
                    setIsInCart(true);
                } else {
                    setIsInCart(false);
                }
            } catch (error) {
                console.error('Ошибка при проверке корзины:', error);
            }
        }

        checkCart();
    }, [item.id]);

    const handleClick = () => {
        setLiked(!liked);
    }

    const handleAddToCart = async () => {
        try {
            // Проверяем, есть ли уже такой товар в базе
            const existingItem = await db.cart.get(item.id);

            if (!existingItem) {
                // Если в базе нет, то добавляем
                await db.cart.add({
                    id: item.id,
                    discount: item.discount,
                });
                setIsInCart(true);
            } else {
                setIsInCart(true)
                console.log('Товар уже в корзине');
            }

            console.log('Товар добавлен в корзину!');
        } catch (error) {
            console.error('Ошибка при добавлении в корзину:', error);
        }
    };

    const hangleClick = () => {
        navigation(`/product/${item.id}`)
    }

    return (
        <div className={styles.container}>
            <img onClick={hangleClick} className={styles.itemImage} src={item.image} alt=""/>
            {userExists &&
                <div onClick={() => handleClick()} className={styles.itemLike}>
                    <box-icon color='black' type={liked ? 'solid' : 'regular'} name='heart'></box-icon>
                </div>
            }
            <div className={styles.itemInfo}>
                <div onClick={hangleClick}>
                    {item.discount !== 0 ?
                        <>
                        <p className={styles.itemPrice}>{Math.ceil((item.price - item.price * (item.discount / 100)) / 100) * 100} сум</p>
                            <p className={styles.itemDiscount}>{item.price} сум</p>
                        </>
                        :
                        <>
                            <p className={styles.itemPrice}>{Math.ceil(item.price / 100) * 100} сум</p>
                        </>

                    }
                    <div className={styles.itemInfoProduct}>
                        <p>{item.title.slice(0, 20)} </p>
                        <p className={styles.itemGrey}></p>
                    </div>
                    <div className={styles.itemInfoProduct}>
                        <p>{item.rating}</p>
                        <p className={styles.itemGrey}> / {item.rateCount} оценок</p>
                    </div>
                </div>
                {
                    userExists &&
                    <>
                        {isInCart ?
                            <Link to={'/basket'} className={styles.itemInCart} >
                                <p>В корзине</p>
                            </Link>
                            :
                            <div onClick={handleAddToCart} className={styles.itemBtn}>
                                <box-icon size='1.2em' name='cart' color='white'/>
                                <p>Купить</p>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}