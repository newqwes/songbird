import React from 'react';
import styles from './header.module.scss'

export default (props) => {

let levelsTitle = props.levelName.map(n => <li key={props.levelName.indexOf(n)} className={`${styles.progress__li}  ${props.level===props.levelName.indexOf(n) ? styles.progress__li_active : styles.progress__li}`}>{n}</li>)

    return (
        <section className={styles.header__progress}>
            <ul className={styles.progress__ul}>
                {levelsTitle}
            </ul>
        </section>
    )
}
