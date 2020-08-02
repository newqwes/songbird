import React from 'react';
import styles from './header.module.scss';
import HeaderTitle from './HeaderTitle';
import HeaderProgress from './HeaderProgress';


export default (props) => {
    return (
        <header className={styles.wrapper} >
            <HeaderTitle score={props.score} />
            <HeaderProgress level={props.level} levelName={props.levelName} />
        </header>
    )
}

