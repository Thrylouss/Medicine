// cartDB.js
import Dexie from 'dexie';

// Создаем экземпляр Dexie и называем базу "CartDB"
const db = new Dexie('CartDB');

// Описываем версию и таблицы (stores)
// В данном случае мы заводим одну таблицу "cart"
db.version(1).stores({
    cart: 'id, discount',
    // 'id' станет ключом (primary key)
    // Остальные поля, которые хотим хранить, перечисляются через запятую
});

// Экспортируем базу
export default db;
