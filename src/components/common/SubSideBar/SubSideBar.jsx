import styles from './styles.module.css';


export default function SubSideBar({ item }){
    console.log(item)

    return (
        <div className={styles.container}>
            <nav>
                <ul>
                    {item.subcategory.map((item) => (
                        <li key={item.id}>
                            <a href="#">{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}