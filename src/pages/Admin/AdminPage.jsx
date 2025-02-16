import styles from './styles.module.css';
import { useState } from 'react';
import CreateData from "../../components/AdminPanel/CreateData/CreateData.jsx";
import UserTable from "../../components/AdminPanel/UserTable/UserTable.jsx";
import ProductTable from "../../components/AdminPanel/ProductTable/ProductTable.jsx";
import CategoryTable from "../../components/AdminPanel/CategoryTable/CategoryTable.jsx"; // Новый компонент для категорий
import useAdminData from "../../hooks/useAdminData.jsx";

export default function AdminPage() {
    const { users, setUsers, products, setProducts, categories, setCategories } = useAdminData();
    const [active, setActive] = useState('user');
    const [editing, setEditing] = useState(null);
    const [create, setCreate] = useState(false);

    const handleEdit = (id, type) => {
        setEditing({ id, type });
    };

    const handleSave = (id, type, updatedData) => {
        if (type === 'user') {
            setUsers(users.map(user => user.id === id ? { ...user, ...updatedData } : user));
        } else if (type === 'product') {
            setProducts(products.map(product => product.id === id ? { ...product, ...updatedData } : product));
        } else if (type === 'category') {
            setCategories(categories.map(category => category.id === id ? { ...category, ...updatedData } : category));
        }
        setEditing(null); // Очищаем режим редактирования после сохранения
    };


    const handleDelete = (id, type) => {
        if (type === 'user') {
            setUsers(users.filter(user => user.id !== id));
        } else if (type === 'product') {
            setProducts(products.filter(product => product.id !== id));
        } else if (type === 'category') { // Исправлено: Теперь работает с `categories`
            setCategories(categories.filter(category => category.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Админ панель</h1>
                <button className={styles.createBtn} onClick={() => setCreate(true)}>
                    {active === 'user' && "Создать пользователя"}
                    {active === 'product' && "Создать продукт"}
                    {active === 'category' && "Создать категорию"}
                </button>
            </div>

            <div className={styles.titleContainer}>
                {['user', 'product', 'category'].map(type => (
                    <p key={type}
                       className={styles.title}
                       style={active === type ? { borderBottom: '2px solid black' } : null}
                       onClick={() => setActive(type)}>
                        {type === 'user' ? 'Пользователи' : type === 'product' ? 'Продукты' : 'Категории'}
                    </p>
                ))}
            </div>

            {active === 'user' && <UserTable users={users} editing={editing} handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete} />}
            {active === 'product' && <ProductTable products={products} editing={editing} handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete} />}
            {active === 'category' && <CategoryTable categories={categories} editing={editing} handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete} />}

            {create && <CreateData active={active} setCreate={setCreate} />}
        </div>
    );
}
