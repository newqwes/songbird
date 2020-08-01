import React from 'react';
import styles from './answer.module.scss';
import defFlag from '../../assets/img/defFlag.jpg'

const AnswerContainer = (props) => {

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.img__container}>
                    <img src={props.isGuessed 
                    ? props.stateTrener[props.randomQuestion].flag
                    : defFlag
                } alt="" />
                </div>
                <div className={styles.title__container}>
                    <h3>{props.isGuessed 
                    ? props.stateTrener[props.randomQuestion].language
                    : '********'
                }</h3>
                </div>
                <div className={styles.player__container}>
                    <audio controls src={props.stateTrener[props.randomQuestion].audio}></audio>
                </div>
            </div>
        </section>
    )
}
export default AnswerContainer;