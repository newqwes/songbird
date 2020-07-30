import React from 'react';
import styles from './answer.module.scss';
import defFlag from '../../assets/img/defFlag.jpg';

const AnswerContainer: React.FC = () => {
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
                    <audio controls src='https://api.lingyourlanguage.com/a/43c12c6d0d859e09012004dff0f4470b06ab5b0cdb00e8af9403e65b03673c71'></audio>
                </div>
            </div>
        </section>
    )
}
export default AnswerContainer;