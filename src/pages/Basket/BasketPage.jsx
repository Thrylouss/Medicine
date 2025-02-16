import styles from './styles.module.css';
import db from '../../indexDB/cartDB.js';
import { useEffect, useState } from "react";
import Confirmation from "../../UI/Confirametion/Confirmation.jsx";
import CartItem from "../../components/CartItem/CartItem.jsx";
import image1 from "../../assets/images/products/1.webp";
import image2 from "../../assets/images/products/Без названия (1).png";
import image3 from "../../assets/images/products/Без названия (2).png";
import image4 from "../../assets/images/products/2.webp";
import image5 from "../../assets/images/products/3.webp";
import image6 from "../../assets/images/products/4.webp";

export default function BasketPage() {
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [agreement, setAgreement] = useState(false);

    const items = [
        { id: 1, title: 'Product 1', description: 'description', price: 1346361, liked: false, image: image1, rating: 5.0, rateCount: 10, discount: 62 },
        { id: 2, title: 'Product 2', description: 'description', price: 141466, liked: false, image: image2, rating: 5.0, rateCount: 10, discount: 0 },
        { id: 3, title: 'Product 3', description: 'description', price: 586361, liked: false, image: image3, rating: 5.0, rateCount: 10, discount: 45 },
        { id: 4, title: 'Product 4', description: 'description', price: 1346146, liked: false, image: image4, rating: 5.0, rateCount: 10, discount: 25 },
        { id: 5, title: 'Product 5', description: 'description', price: 68538, liked: false, image: image5, rating: 5.0, rateCount: 10, discount: 0 },
        { id: 6, title: 'Product 6', description: 'description', price: 136641, liked: false, image: image6, rating: 5.0, rateCount: 10, discount: 50 }
    ];

    useEffect(() => {
        const fetchCartItems = async () => {
            const allItems = await db.cart.toArray();
            const updatedCartItems = allItems.map(cartItem => {
                const product = items.find(item => item.id === cartItem.productId);
                return product ? { ...cartItem, ...product } : cartItem;
            });
            setCartItems(updatedCartItems);
        };
        fetchCartItems();
    }, []);

    const handleOrder = () => {
        if (!paymentMethod) {
            setErrorMessage("Пожалуйста, выберите способ оплаты.");
            return;
        }
        if (!deliveryTime) {
            setErrorMessage("Пожалуйста, укажите время доставки.");
            return;
        }
        if (!deliveryAddress) {
            setErrorMessage("Пожалуйста, укажите адрес доставки.");
            return;
        }
        if (!agreement) {
            setErrorMessage("Пожалуйста, подтвердите согласие на обработку персональных данных.");
            return;
        }

        setErrorMessage("");
        alert("Заказ оформлен успешно!");
    };

    return (
        <div className={styles.container}>
            <div className={styles.asideLeft}>
                <div className={styles.asideLeftContainer}>
                    <h1 className={styles.title}>
                        Корзина <span>{cartItems.length} товар</span>
                    </h1>
                    {cartItems.map((item, index) => (
                        <CartItem key={item.id} item={item} index={index} setCartItems={setCartItems} items={cartItems} />
                    ))}
                </div>
                <div className={styles.payment}>
                    <div className={styles.paymentSection}>
                        <h2>Способ оплаты</h2>
                        <div className={styles.paymentChoose}>
                            <select
                                className={styles.paymentAddress}
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                                <option value="">Выберите способ оплаты</option>
                                <option value="Наличные">Наличные</option>
                                <option value="Карта">Карта</option>
                                <option value="В долг">В долг</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.paymentSection}>
                        <h2>Дата доставки</h2>
                        <div className={styles.paymentChoose}>
                            <input
                                className={styles.paymentAddress}
                                type="date"
                                value={deliveryTime}
                                onChange={(e) => setDeliveryTime(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.paymentSection}>
                    <h2>Адрес доставки</h2>
                    <div className={styles.paymentChoose}>
                        <input
                            className={styles.paymentAddress}
                            type="text"
                            placeholder='Введите адрес доставки'
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.asideRight}>
                <h3 className={styles.subtitle}>Выбрать адрес доставки</h3>
                <div className={styles.summary}>
                    <p>Товары, {cartItems.length} шт.</p>
                    <h2>Итого: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} сум</h2>
                </div>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                <button className={styles.orderBtn} onClick={handleOrder}>Заказать</button>
                <Confirmation setAgreement={setAgreement} agreement={agreement} />
            </div>
        </div>
    );
}
