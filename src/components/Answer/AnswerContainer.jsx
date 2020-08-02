import React from 'react';
import styles from './answer.module.scss';
import defFlag from '../../assets/img/defFlag.jpg'

export default (props) => {
    let level = props.level
    let randomQuestion = props.randomQuestion
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.img__container}>
                    <img src={props.isGuessed 
                    ? props.state[level][randomQuestion].flag
                    : defFlag
                } alt="" />
                </div>
                <div className={styles.title__container}>
                    <h3>{props.isGuessed 
                    ? props.state[level][randomQuestion].language
                    : 'Какой язык?'
                }</h3>
                </div>
                <div className={styles.player__container}>
                    <audio controls src={props.state[level][randomQuestion].audio}></audio>
                </div>
            </div>
        </section>
    )
}