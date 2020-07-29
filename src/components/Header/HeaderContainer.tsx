import React from 'react';
import styles from './header.module.scss'

const HeaderContainer: React.FC = () => {
    return <header className={styles.header} >
        <div className={styles.header__title}>
            <div className={styles.logo}>Song<span>Bird</span></div>
            <div>Score: 0</div>
        </div>
    </header>
}
export default HeaderContainer;

