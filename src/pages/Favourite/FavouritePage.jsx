import styles from './styles.module.css'
import image1 from "../../assets/images/products/1.webp";
import image2 from "../../assets/images/products/Без названия (1).png";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import db from '../../indexDB/cartDB.js'
import {useEffect, useState} from "react";
import image3 from "../../assets/images/products/Без названия (2).png";
import image4 from "../../assets/images/products/2.webp";
import image5 from "../../assets/images/products/3.webp";
import image6 from "../../assets/images/products/4.webp";

export default function FavouritePage(){
    const [favItems, setFavItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([]);

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
        {
            id: 3,
            title: 'title',
            description: 'description',
            price: 586361,
            liked: false,
            image: image3,
            rating: 5.0,
            rateCount: 10,
            discount: 45,
        },
        {
            id: 4,
            title: 'title',
            description: 'description',
            price: 1346146,
            liked: false,
            image: image4,
            rating: 5.0,
            rateCount: 10,
            discount: 25,
        },
        {
            id: 5,
            title: 'title',
            description: 'description',
            price: 68538,
            liked: false,
            image: image5,
            rating: 5.0,
            rateCount: 10,
            discount: 0
        },
        {
            id: 6,
            title: 'title',
            description: 'description',
            price: 136641,
            liked: false,
            image: image6,
            rating: 5.0,
            rateCount: 10,
            discount: 50,
        },
        {
            id: 7,
            title: 'title',
            description: 'description',
            price: 721346,
            liked: false,
            image: image1,
            rating: 5.0,
            rateCount: 10,
            discount: 0,
        },
        {
            id: 8,
            title: 'title',
            description: 'description',
            price: 134646,
            liked: false,
            image: image2,
            rating: 5.0,
            rateCount: 10,
            discount: 15,
        },
        {
            id: 9,
            title: 'title',
            description: 'description',
            price: 124124,
            liked: false,
            image: image3,
            rating: 5.0,
            rateCount: 10,
            discount: 20,
        },
        {
            id: 10,
            title: 'title',
            description: 'description',
            price: 100000,
            liked: false,
            image: image4,
            rating: 5.0,
            rateCount: 10,
            discount: 40,
        },
        {
            id: 11,
            title: 'title',
            description: 'description',
            price: 100000,
            liked: false,
            image: image5,
            rating: 5.0,
            rateCount: 10,
            discount: 90,
        },
        {
            id: 12,
            title: 'title',
            description: 'descriptiona fep fmeqi[ mqeiofjqoefjqjefiq',
            price: 100000,
            liked: false,
            image: image6,
            rating: 5.0,
            rateCount: 10,
            discount: 10,
        },
    ]

    useEffect(() => {
        db.favorites.toArray()
            .then(favorites => {
                setFavItems(favorites);

                // Получаем список productId из избранных
                const favProductIds = favorites.map(fav => fav.productId);

                // Фильтруем товары, которые есть в избранном
                const filtered = items.filter(item => favProductIds.includes(item.id));
                setFilteredItems(filtered);
            })
            .catch(error => console.log("Ошибка загрузки избранного:", error));
    }, [favItems]);

    // Fetch запрос на поиск продукта по айди



    return (
        <>
            <div className={styles.container}>
                <h1>Избранное</h1>
                <div className={styles.itemsContainer}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => <ProductCard key={item.id} item={item} />)
                    ) : (
                        <p>Нет избранных товаров</p>
                    )}
                </div>
            </div>
        </>
    )
}