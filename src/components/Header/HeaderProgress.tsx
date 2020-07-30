import React from 'react';
import styles from './header.module.scss'

const HeaderProgress: React.FC = () => {
    return (
        <section className={styles.header__progress}>
            <ul className={styles.progress__ul}>
                <li className={`${styles.progress__li} ${styles.progress__li_active}`}>Разминка</li>
                <li className={styles.progress__li}>Словянские</li>
                <li className={styles.progress__li}>Европейские</li>
                <li className={styles.progress__li}>Азиатские</li>
                <li className={styles.progress__li}>Африканские</li>
                <li className={styles.progress__li}>Фантастические</li>
            </ul>
        </section>
    )
}
export default HeaderProgress;

