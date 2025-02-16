import styles from '../../pages/Admin/styles.module.css';

export default function ActionButtons({ id, type, editing, handleEdit, handleSave, handleDelete }) {
    return (
        <div className={styles.btnContainer}>
            {editing?.id === id && editing?.type === type ? (
                // Показываем только кнопку "Сохранить", если элемент редактируется
                <button className={styles.editButton} onClick={() => handleSave(id, type, {})}>
                    Сохранить
                </button>
            ) : (
                // Показываем "Редактировать" и "Удалить", если элемент НЕ редактируется
                <>
                    <button className={styles.editButton} onClick={() => handleEdit(id, type)}>
                        Изменить
                    </button>
                    <button className={styles.deleteButton} onClick={() => handleDelete(id, type)}>
                        Удалить
                    </button>
                </>
            )}
        </div>
    );
}
