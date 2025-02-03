import styles from './styles.module.css';
import db from '../../indexDB/cartDB.js';
import { useEffect, useState } from "react";

export default function BasketPage() {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchCartItems = async () => {
            const allItems = await db.cart.toArray();
            setCartItems(allItems);
        };
        fetchCartItems();
    }, []);

    const handleDeleteItem = async (id) => {
        await db.cart.delete(id);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className={styles.container}>
            {/* Левая часть корзины */}
            <div className={styles.asideLeft}>
                <div className={styles.asideLeftContainer}>
                    <h1 className={styles.title}>
                        Корзина <span>{cartItems.length} товар</span>
                    </h1>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <img src={item.image} alt={item.name} className={styles.cartItemImage}/>
                            <div className={styles.cartItemDetails}>
                                <h2 className={styles.itemName}>{item.name}</h2>
                                <p className={styles.itemInfo}>Цвет: {item.color}</p>
                                <p className={styles.itemInfo}>Дата доставки: {item.deliveryDate}</p>
                                <div className={styles.cartItemActions}>
                                    <button
                                        className={styles.quantityBtn}
                                        onClick={() => setQuantity(quantity - 1)}
                                    >-
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        className={styles.quantityBtn}
                                        onClick={() => setQuantity(quantity + 1)}
                                    >+
                                    </button>
                                </div>
                                <h3 className={styles.itemPrice}>{item.price * item.quantity} сум</h3>
                            </div>
                            <button
                                className={styles.deleteBtn}
                                onClick={() => handleDeleteItem(item.id)}
                            >Удалить
                            </button>
                        </div>
                    ))}
                </div>
                <div className={styles.payment}>
                    <div className={styles.paymentSection}>
                        <h2>Способ доставки</h2>
                        <div className={styles.paymentChoose}>
                            <input className={styles.paymentAddress} type="text" placeholder='Укажите время и адрес доставки'/>
                        </div>
                    </div>
                    <div className={styles.paymentSection}>
                        <h2>Способ оплаты</h2>
                        <div className={styles.paymentChoose}>
                            <select className={styles.paymentAddress} name="" id="">
                                <option value=""></option>
                                <option value="">Наличные</option>
                                <option value="">Карта</option>
                                <option value="">В долг</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>

            {/* Правая часть корзины */}
            <div className={styles.asideRight}>
                <h3 className={styles.subtitle}>Выбрать адрес доставки</h3>
                <div className={styles.summary}>
                    <p>Товары, 4 шт.</p>
                    <h2>Итого: 31 300 сум</h2>
                </div>
                <button className={styles.orderBtn}>Заказать</button>
                <div className={styles.political}>
                    <input type="checkbox"/>
                    <span>Согласен с правилами пользования торговой площадкой</span>
                </div>
            </div>
        </div>
    );
}
