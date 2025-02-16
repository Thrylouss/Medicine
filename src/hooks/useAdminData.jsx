import { useState } from "react";
import image1 from '../assets/images/OIP (1).jpg'
import image2 from '../assets/images/OIP (2).jpg'
import image3 from '../assets/images/OIP (3).jpg'

export default function useAdminData() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Иван Петров', email: 'ivan@example.com', password: 'password123' },
        { id: 2, name: 'Мария Смирнова', email: 'maria@example.com', password: 'securePass456' },
        { id: 3, name: 'Алексей Сидоров', email: 'alex@example.com', password: 'alex789' },
    ]);

    const [products, setProducts] = useState([
        { id: 1, name: 'Ноутбук', description: 'Мощный ноутбук', price: 1000, category: 'Электроника', quantity: 10, image: image1 },
        { id: 2, name: 'Смартфон', description: 'Современный смартфон', price: 800, category: 'Электроника', quantity: 20, image: image2 },
        { id: 3, name: 'Наушники', description: 'Шумоподавляющие наушники', price: 200, category: 'Аудиотехника', quantity: 15, image: image3 },
    ]);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Электроника', description: 'Гаджеты и устройства', subcategory: '' },
        { id: 2, name: 'Одежда', description: 'Стильная одежда', subcategory: 'Обувь' },
        { id: 3, name: 'Бытовая техника', description: 'Техника для дома', subcategory: '' },
    ]);

    return { users, setUsers, products, setProducts, categories, setCategories };
}
