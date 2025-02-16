import styles from '../../../pages/Admin/styles.module.css';
import ActionButtons from "../../../UI/ActionButtons/ActionButtons.jsx";
import { useState } from 'react';

export default function ProductTable({ products, categories, editing, handleEdit, handleSave, handleDelete }) {
    const [updatedData, setUpdatedData] = useState({});

    const handleInputChange = (e, field, id) => {
        setUpdatedData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Картинка</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Цена</th>
                <th>Категория</th>
                <th>Количество</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                        {editing?.id === product.id ? (
                            <input
                                type="text"
                                defaultValue={product.image}
                                onChange={(e) => handleInputChange(e, "image", product.id)}
                                placeholder="URL изображения"
                            />
                        ) : (
                            <img src={product.image} alt={product.name} className={styles.productImage} />
                        )}
                    </td>
                    <td>
                        {editing?.id === product.id ? (
                            <input
                                type="text"
                                defaultValue={product.name}
                                onChange={(e) => handleInputChange(e, "name", product.id)}
                            />
                        ) : (
                            product.name
                        )}
                    </td>
                    <td>
                        {editing?.id === product.id ? (
                            <input
                                type="text"
                                defaultValue={product.description}
                                onChange={(e) => handleInputChange(e, "description", product.id)}
                            />
                        ) : (
                            product.description
                        )}
                    </td>
                    <td>
                        {editing?.id === product.id ? (
                            <input
                                type="number"
                                defaultValue={product.price}
                                onChange={(e) => handleInputChange(e, "price", product.id)}
                            />
                        ) : (
                            `$${product.price}`
                        )}
                    </td>
                    <td>
                        {editing?.id === product.id ? (
                            <select
                                defaultValue={product.category}
                                onChange={(e) => handleInputChange(e, "category", product.id)}
                            >
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        ) : (
                            product.category
                        )}
                    </td>
                    <td>
                        {editing?.id === product.id ? (
                            <input
                                type="number"
                                defaultValue={product.quantity}
                                onChange={(e) => handleInputChange(e, "quantity", product.id)}
                            />
                        ) : (
                            product.quantity
                        )}
                    </td>
                    <td>
                        <ActionButtons
                            id={product.id}
                            type="product"
                            editing={editing}
                            handleEdit={handleEdit}
                            handleSave={() => handleSave(product.id, "product", updatedData)}
                            handleDelete={handleDelete}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
