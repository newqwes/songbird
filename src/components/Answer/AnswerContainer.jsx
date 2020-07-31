import React from 'react';
import styles from './answer.module.scss';
import defFlag from '../../assets/img/defFlag.jpg';

const AnswerContainer = (props) => {

const china = require("../../assets/saundLanguage/China.mp3");
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.img__container}>
                    <img src={defFlag} alt="" />
                </div>
                <div className={styles.title__container}>
                    <h3>******</h3>
                </div>
                <div className={styles.player__container}>
                    <audio controls src={china}></audio>
                </div>
            </div>
        </section>
    )
}
export default AnswerContainer;