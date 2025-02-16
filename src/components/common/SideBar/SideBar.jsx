import {useEffect, useState} from "react";
import styles from "./styles.module.css";
import SubSideBar from "../SubSideBar/SubSideBar.jsx";

export default function SideBar({ isOpen, activeCategory, setActiveCategory }) {
    const [activeItem, setActiveItem] = useState(null);

    const items = [
        {
            id: 1,
            title: "Категория 1",
            icon: "plus-medical",
            subcategory: [
                {
                    id: 1,
                    title: "Подкатегория 1"
                },
                {
                    id: 2,
                    title: "Подкатегория 2"
                },
                {
                    id: 3,
                    title: "Подкатегория 3"
                },
                {
                    id: 4,
                    title: "Подкатегория 4"
                },
                {
                    id: 5,
                    title: "Подкатегория 5"
                }
            ]
        },
        {
            id: 2,
            title: "Категория 2",
            icon: "medal",
            subcategory: [
                {
                    id: 1,
                    title: "Подкатегория 6"
                },
                {
                    id: 2,
                    title: "Подкатегория 7"
                },
                {
                    id: 3,
                    title: "Подкатегория 8"
                },
                {
                    id: 4,
                    title: "Подкатегория 9"
                },
                {
                    id: 5,
                    title: "Подкатегория 10"
                }
            ]
        },
        {
            id: 3,
            title: "Категория 3",
            icon: "capsule",
            subcategory: [
                {
                    id: 1,
                    title: "Подкатегория 11"
                },
                {
                    id: 2,
                    title: "Подкатегория 12"
                },
                {
                    id: 3,
                    title: "Подкатегория 13"
                },
                {
                    id: 4,
                    title: "Подкатегория 14"
                },
                {
                    id: 5,
                    title: "Подкатегория 17"
                }
            ]
        }
    ]

    useEffect(() => {
        if (activeCategory) {
            const activeItem = items.find((item) => item.id === activeCategory);
            setActiveItem(activeItem);
        } else {
            setActiveItem(null);
        }
    }, [activeCategory]);

    return (
        <>
            <div
                className={`${styles.sidebar} ${
                    isOpen ? styles.sidebarOpen : ""
                }`}
            >
                <div>
                    <nav>
                        <ul>
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    onMouseEnter={() => setActiveCategory(item.id)}
                                >
                                    <box-icon name={item.icon}></box-icon>
                                    <a href="#">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            {activeItem && isOpen && <SubSideBar item={activeItem}  />}
        </>
    );
}
