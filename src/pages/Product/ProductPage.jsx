import styles from './styles.module.css';
import productImage from '../../assets/images/products/test.webp';
import thumbnail1 from '../../assets/images/products/test.webp';
import thumbnail2 from '../../assets/images/products/2.webp';
import thumbnail3 from '../../assets/images/products/3.webp';
import thumbnail4 from '../../assets/images/products/4.webp';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useUser} from "../../context/UserContext.jsx";

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

export default function ProductPage() {
    const [currentImage, setCurrentImage] = useState(productImage);
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate();
    const { userExists } = useUser();

    const handleAddToCart = () => {
        navigate('/basket');
    };

    return (
        <>
            <div className={styles.container}>
                {/* Левый блок с изображениями */}
                <div className={styles.asideLeft}>
                    <img className={styles.productImage} src={currentImage} alt="Product"/>
                    <div className={styles.imageGallery}>
                        {thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                className={`${styles.thumbnail} ${
                                    currentImage === thumbnail ? styles.activeThumbnail : ''
                                }`}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setCurrentImage(thumbnail)}
                            />
                        ))}
                    </div>
                </div>

                {/* Центральный блок с описанием */}
                <div className={styles.asideCenter}>
                    <h1 className={styles.title}>Прочные крючки для штор 100 штук гвоздик</h1>
                    <p>Категория: Мебель</p>
                    <p>Продавец: ТОО "Товары для дома"</p>
                    <div className={styles.rate}>
                        <box-icon name="star" type="solid" color="orange" size="15px"></box-icon>
                        <span>5.0 (8376 отзывов)</span>
                    </div>
                    <div className={styles.description}>
                        <h2>Описание</h2>
                        <p>Прочные крючки для тяжелых штор и тюля. Легко застегиваются и рассчитаны на большие
                            нагрузки.</p>
                    </div>
                </div>

                {/* Правый блок с ценой и кнопками */}
                <div className={styles.asideRight}>
                    <h1 className={styles.price}>31 300 сум</h1>
                    <p className={styles.deliveryInfo}>Доставка: 21 января, склад WB</p>
                    {userExists ?
                        isInCart ? (
                            <button className={styles.inCartBtn} onClick={() => handleAddToCart()}>В корзине</button>
                        ) : (
                            <button className={styles.addToCartBtn} onClick={() => setIsInCart(true)}>
                                Добавить в корзину
                            </button>
                        )
                        :
                        <button className={styles.addToCartBtn} onClick={() => navigate('/auth')}>
                            Добавить в корзину
                        </button>
                    }
                </div>
            </div>
            {/* Комментарии */}
            <div className={styles.commentsSection}>
                <h2>Комментарии</h2>
                <div className={styles.comment}>
                    <p><strong>Иван:</strong> Отличные крючки, держат шторы даже при сильном ветре. Рекомендую!</p>
                </div>
                <div className={styles.comment}>
                    <p><strong>Мария:</strong> Понравился подарок, очень удобно. Спасибо!</p>
                </div>
            </div>

        </>
    );
}
