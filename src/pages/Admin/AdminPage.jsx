import styles from './styles.module.css';
import { useState } from 'react';
import CreateData from "../../components/AdminPanel/CreateData/CreateData.jsx";

export default function AdminPage() {
    const [active, setActive] = useState('user');
    const [editing, setEditing] = useState(null);
    const [create, setCreate] = useState(false);

    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'Moderator' },
    ]);

    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop', description: 'High performance laptop', price: '$1000' },
        { id: 2, name: 'Phone', description: 'Latest model smartphone', price: '$800' },
        { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: '$200' },
    ]);

    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'Maintenance Update', description: 'System maintenance scheduled on Friday.' },
        { id: 2, title: 'New Features', description: 'Introducing new dashboard features.' },
        { id: 3, title: 'Holiday Notice', description: 'Office will be closed on public holidays.' },
    ]);

    const handleEdit = (id, type) => {
        setEditing({ id, type });
    };

    const handleSave = (id, type, updatedData) => {
        if (type === 'user') {
            setUsers(users.map(user => user.id === id ? { ...user, ...updatedData } : user));
        } else if (type === 'product') {
            setProducts(products.map(product => product.id === id ? { ...product, ...updatedData } : product));
        } else if (type === 'announcement') {
            setAnnouncements(announcements.map(announcement => announcement.id === id ? { ...announcement, ...updatedData } : announcement));
        }
        setEditing(null);
    };

    const renderTable = () => {
        const renderActions = (id, type) => (
            editing?.id === id && editing.type === type ? (
                <>
                    <button
                        className={styles.editButton}
                        onClick={() => handleSave(id, type, {})}>
                        Сохранить
                    </button>
                </>
            ) : (
                <>
                    <button
                        className={styles.editButton}
                        onClick={() => handleEdit(id, type)}>
                        Редактировать
                    </button>
                    <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(id, type)}>
                        Удалить
                    </button>
                </>
            )
        );

        if (active === 'user') {
            return (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Почта</th>
                        <th>Роль</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                {editing?.id === user.id && editing.type === 'user' ? (
                                    <input
                                        type="text"
                                        defaultValue={user.name}
                                        onChange={(e) => user.name = e.target.value}
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editing?.id === user.id && editing.type === 'user' ? (
                                    <input
                                        type="text"
                                        defaultValue={user.email}
                                        onChange={(e) => user.email = e.target.value}
                                    />
                                ) : (
                                    user.email
                                )}
                            </td>
                            <td>
                                {editing?.id === user.id && editing.type === 'user' ? (
                                    <input
                                        type="text"
                                        defaultValue={user.role}
                                        onChange={(e) => user.role = e.target.value}
                                    />
                                ) : (
                                    user.role
                                )}
                            </td>
                            <td className={styles.btnContainer}>{renderActions(user.id, 'user')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        } else if (active === 'product') {
            return (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                {editing?.id === product.id && editing.type === 'product' ? (
                                    <input
                                        type="text"
                                        defaultValue={product.name}
                                        onChange={(e) => product.name = e.target.value}
                                    />
                                ) : (
                                    product.name
                                )}
                            </td>
                            <td>
                                {editing?.id === product.id && editing.type === 'product' ? (
                                    <input
                                        type="text"
                                        defaultValue={product.description}
                                        onChange={(e) => product.description = e.target.value}
                                    />
                                ) : (
                                    product.description
                                )}
                            </td>
                            <td>
                                {editing?.id === product.id && editing.type === 'product' ? (
                                    <input
                                        type="text"
                                        defaultValue={product.price}
                                        onChange={(e) => product.price = e.target.value}
                                    />
                                ) : (
                                    product.price
                                )}
                            </td>
                            <td className={styles.btnContainer}>{renderActions(product.id, 'product')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        } else if (active === 'anoun') {
            return (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Заголовок</th>
                        <th>Описание</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {announcements.map(announcement => (
                        <tr key={announcement.id}>
                            <td>{announcement.id}</td>
                            <td>
                                {editing?.id === announcement.id && editing.type === 'announcement' ? (
                                    <input
                                        type="text"
                                        defaultValue={announcement.title}
                                        onChange={(e) => announcement.title = e.target.value}
                                    />
                                ) : (
                                    announcement.title
                                )}
                            </td>
                            <td>
                                {editing?.id === announcement.id && editing.type === 'announcement' ? (
                                    <input
                                        type="text"
                                        defaultValue={announcement.description}
                                        onChange={(e) => announcement.description = e.target.value}
                                    />
                                ) : (
                                    announcement.description
                                )}
                            </td>
                            <td className={styles.btnContainer}>{renderActions(announcement.id, 'announcement')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Admin Panel</h1>
                <button className={styles.createBtn} onClick={() => setCreate(true)}>Создать пользователя</button>
            </div>

            <div>
            <div className={styles.titleContainer}>
                    <p
                        className={styles.title}
                        style={active === 'user' ? {borderBottom: '2px solid black'} : null}
                        onClick={() => setActive('user')}>
                        User Management
                    </p>
                    <p
                        className={styles.title}
                        style={active === 'product' ? {borderBottom: '2px solid black'} : null}
                        onClick={() => setActive('product')}>
                        Product Management
                    </p>
                    <p
                        className={styles.title}
                        style={active === 'anoun' ? {borderBottom: '2px solid black'} : null}
                        onClick={() => setActive('anoun')}>
                        Announcement Management
                    </p>
                </div>
                {renderTable()}
                {create && <CreateData active={active} setCreate={setCreate}/>}
            </div>
        </div>
    );
}
