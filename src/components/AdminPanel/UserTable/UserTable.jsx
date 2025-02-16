import styles from '../../../pages/Admin/styles.module.css';
import ActionButtons from "../../../UI/ActionButtons/ActionButtons.jsx";
import { useState } from 'react';

export default function UserTable({ users, editing, handleEdit, handleSave, handleDelete }) {
    const [updatedData, setUpdatedData] = useState({});
    const [passwordVisibility, setPasswordVisibility] = useState({}); // Хранит состояние показа пароля

    const handleInputChange = (e, field, id) => {
        setUpdatedData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const togglePasswordVisibility = (id) => {
        setPasswordVisibility(prev => ({
            ...prev,
            [id]: !prev[id] // Инвертируем текущее состояние
        }));
    };

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Почта</th>
                <th>Пароль</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                        {editing?.id === user.id ? (
                            <input
                                type="text"
                                defaultValue={user.name}
                                onChange={(e) => handleInputChange(e, "name", user.id)}
                            />
                        ) : (
                            user.name
                        )}
                    </td>
                    <td>
                        {editing?.id === user.id ? (
                            <input
                                type="text"
                                defaultValue={user.email}
                                onChange={(e) => handleInputChange(e, "email", user.id)}
                            />
                        ) : (
                            user.email
                        )}
                    </td>
                    <td>
                        <div className={styles.passwordContainer}>
                            {editing?.id === user.id ? (
                                <input
                                    type={passwordVisibility[user.id] ? "text" : "password"}
                                    defaultValue={user.password}
                                    onChange={(e) => handleInputChange(e, "password", user.id)}
                                />
                            ) : (
                                <span>{passwordVisibility[user.id] ? user.password : "********"}</span>
                            )}
                            <button
                                className={styles.togglePassword}
                                onClick={() => togglePasswordVisibility(user.id)}
                            >
                                {passwordVisibility[user.id] ? "🙈" : "👁"}
                            </button>
                        </div>
                    </td>
                    <td>
                        <ActionButtons
                            id={user.id}
                            type="user"
                            editing={editing}
                            handleEdit={handleEdit}
                            handleSave={() => handleSave(user.id, "user", updatedData)}
                            handleDelete={handleDelete}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
