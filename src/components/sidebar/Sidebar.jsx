import React from 'react'
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <h1>Категории</h1>
                <nav>
                    <ul className={styles.list}>
                        <li>Фантастика</li>
                        <li>Триллеры</li>
                        <li>Комедии</li>
                        <li>Детективы</li>
                        <li>Новинки</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
