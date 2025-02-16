import styles from './styles.module.css';
import image1 from "../../assets/images/products/1.webp";
import image2 from "../../assets/images/products/Без названия (1).png";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function PurchasesPage() {

    // fetch запрос для получение поиска и фильтрации товаров
    
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
            id: 32,
            title: 'title',
            description: 'description',
            price: 141466,
            liked: false,
            image: image2,
            rating: 5.0,
            rateCount: 10,
            discount: 0
        },
    ];

    return (
        <>
            <div className={styles.container}>
                <h1>Покупки</h1>
                <div className={styles.purchaseFilter}>
                    <select defaultValue="">
                        <option value="" disabled>Выберите способ оплаты</option>
                        <option value="cash">Наличкой</option>
                        <option value="card">Картой</option>
                        <option value="credit">В долг</option>
                    </select>
                    <select defaultValue="">
                        <option value="" disabled>Выберите статус</option>
                        <option value="delivered">Доставлена</option>
                        <option value="progress">В процессе</option>
                    </select>
                    <div>
                        <input type="text" placeholder="Введите название заказа"/>
                        <box-icon color="#c8c8d1" name="search"></box-icon>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    {items.map(item => <ProductCard key={item.id} item={item}/>)}
                </div>
            </div>
        </>
    );
}
