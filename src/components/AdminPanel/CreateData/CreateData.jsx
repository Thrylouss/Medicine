import styles from './styles.module.css';
import { useState } from 'react';

export default function CreateData({ active, setCreate }){

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.closeBtn}>
                    <box-icon name='x'
                              size='md'
                              onClick={() => setCreate(false)}
                              type='solid'>

                    </box-icon>

                </div>
                <form className={styles.createForm} onSubmit={handleSubmit}>
                    {active === 'user' &&
                        <>
                            <h1>Создать Пользователя</h1>
                            <input type="text" required={true} placeholder='Введите имя'/>
                            <input type="email" required={true} placeholder='Введите почту'/>
                            <input type="text" required={true} placeholder='Введите роль'/>
                            <button type='submit'>Добавить пользователя</button>
                        </>
                    }
                    {active === 'product' &&
                        <>
                            <h1>Создать Продукт</h1>
                            <input type="file" required={true} placeholder='Выберите изображение'/>
                            <input type="text" required={true} placeholder='Введите название'/>
                            <input type="text" required={true} placeholder='Введите описание'/>
                            <input type="number" required={true} placeholder='Введите цену'/>
                            <button type='submit'>Добавить продукт</button>
                        </>

                    }
                    {active === 'category' &&
                        <>
                            <h1>Создать Категория</h1>
                            <input type="text" required={true} placeholder='Введите заголовок'/>
                            <input type="text" required={true} placeholder='Введите описание'/>
                            <button type='submit'>Добавить категорию</button>
                        </>
                    }
                </form>
            </div>
            {setCreate && <div className={styles.overlay}></div>}
        </>
    )
}