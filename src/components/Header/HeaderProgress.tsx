import React from 'react';
import styles from './header.module.scss'

const HeaderProgress: React.FC = () => {
    return (
        <section className={styles.header__progress}>
            <ul className={styles.progress__ul}>
                <li className={`${styles.progress__li} ${styles.progress__li_active}`}>Разминка</li>
                <li className={styles.progress__li}>Воробьиные</li>
                <li className={styles.progress__li}>Лесные птицы</li>
                <li className={styles.progress__li}>Певчие птицы</li>
                <li className={styles.progress__li}>Хищные птицы</li>
                <li className={styles.progress__li}>Морские птицы</li>
            </ul>
        </section>
    )
}
export default HeaderProgress;

