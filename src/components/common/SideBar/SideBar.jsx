import {useState} from "react";
import styles from "./styles.module.css";

export default function SideBar({ isOpen }) {

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
            id: 3,
            title: "Категория 3",
            icon: "capsule",
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
        }
    ]

    return (
        <div
            className={`${styles.sidebar} ${
                isOpen ? styles.sidebarOpen : ""
            }`}
        >
            <div className={styles.sidebarContent}>
                <nav>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <box-icon name={item.icon}></box-icon>
                                <a href="#">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
