import styles from "../../pages/Basket/styles.module.css";
import { useState } from "react";
import db from "../../indexDB/cartDB.js";

export default function CartItem({ item, index, setCartItems, items }) {
    const [quantity, setQuantity] = useState(1);



    const handleQuantityMinus = async () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            await handleDeleteItem(item.id);
        }
    };

    const handleDeleteItem = async (id) => {
        await db.cart.delete(id);
        // console.log(db.cart.toArray())
        // console.log(id)
        // console.log(items)
        setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
        // console.log(items)
    };

    return (
        <div key={index} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
            <div className={styles.cartItemDetails}>
                <h2 className={styles.itemName}>{item.name}</h2>
                <p className={styles.itemInfo}>Цвет: {item.color}</p>
                <p className={styles.itemInfo}>Дата доставки: {item.deliveryDate}</p>
                <div className={styles.cartItemActions}>
                    <button
                        className={styles.quantityBtn}
                        onClick={handleQuantityMinus}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        className={styles.quantityBtn}
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <h3 className={styles.itemPrice}>{item.price * quantity} сум</h3>
            </div>
            <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteItem(item.id)}
            >
                Удалить
            </button>
        </div>
    );
}
