import React from 'react';
import styles from './header.module.scss'

export default (props) => {
    return (
        <section className={styles.title}>
            <div className={styles.logo}>Song<span>Language</span></div>
            <div className={styles.score}>
                <p>Score: {props.score}</p>
            </div>
        </section>
    )

}


