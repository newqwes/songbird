import React from 'react';
import styles from './answer.module.scss';

const AnswerContainer: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.img__container}>
                    <img src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg" alt="" />
                </div>
                <div className={styles.title__container}>
                    <h3>******</h3>
                </div>
                <div className={styles.player__container}>
                    <audio controls src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"></audio>
                </div>
            </div>
        </section>
    )
}
export default AnswerContainer;