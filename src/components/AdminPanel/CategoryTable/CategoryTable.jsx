import styles from '../../../pages/Admin/styles.module.css';
import ActionButtons from "../../../UI/ActionButtons/ActionButtons.jsx";
import { useState } from 'react';

export default function CategoryTable({ categories, editing, handleEdit, handleSave, handleDelete }) {
    const [updatedData, setUpdatedData] = useState({});

    const handleInputChange = (e, field, id) => {
        setUpdatedData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Подкатегория</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => (
                <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>
                        {editing?.id === category.id ? (
                            <input
                                type="text"
                                defaultValue={category.name}
                                onChange={(e) => handleInputChange(e, "name", category.id)}
                            />
                        ) : (
                            category.name
                        )}
                    </td>
                    <td>
                        {editing?.id === category.id ? (
                            <input
                                type="text"
                                defaultValue={category.description}
                                onChange={(e) => handleInputChange(e, "description", category.id)}
                            />
                        ) : (
                            category.description
                        )}
                    </td>
                    <td>
                        {editing?.id === category.id ? (
                            categories.length > 0 ? (
                                <select
                                    defaultValue={category.subcategory || ""}
                                    onChange={(e) => handleInputChange(e, "subcategory", category.id)}
                                >
                                    <option value="">Нет подкатегории</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.name}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                "Нет доступных категорий"
                            )
                        ) : (
                            category.subcategory || "Нет подкатегории"
                        )}
                    </td>
                    <td>
                        <ActionButtons
                            id={category.id}
                            type="category"
                            editing={editing}
                            handleEdit={handleEdit}
                            handleSave={() => handleSave(category.id, "category", updatedData)}
                            handleDelete={handleDelete}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
