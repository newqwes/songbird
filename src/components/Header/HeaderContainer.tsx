import React from 'react';
import styles from './header.module.scss';
import HeaderTitle from './HeaderTitle';
import HeaderProgress from './HeaderProgress';


const HeaderContainer: React.FC = () => {
    return (
        <header className={styles.wrapper} >
            <HeaderTitle />
            <HeaderProgress />
        </header>
    )
}
export default HeaderContainer;

