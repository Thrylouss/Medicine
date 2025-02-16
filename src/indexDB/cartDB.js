import Dexie from 'dexie';

// Создаем базу данных
const db = new Dexie('CartDB');

// Определяем структуру базы
db.version(1).stores({
    cart: '++id, productId',      // Таблица корзины (id автоинкрементируется)
    favorites: '++id, productId'  // Таблица избранного (id автоинкрементируется)
});

// Экспортируем базу данных
export default db;
