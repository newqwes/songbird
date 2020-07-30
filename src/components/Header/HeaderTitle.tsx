import React from 'react';
import styles from './header.module.scss'

const HeaderTitle: React.FC = () => {
    return (
        <section className={styles.title}>
            <div className={styles.logo}>Song<span>Language</span></div>
            <div className={styles.score}>
                <p>Score: 0</p>
            </div>
        </section>
    )

}
export default HeaderTitle;

