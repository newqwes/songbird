import React from 'react';
import styles from './answer.module.scss';
import defFlag from '../../assets/img/defFlag.jpg'
import ReactPlayer from 'react-player'

export default (props) => {
    let level = props.state.level;
    let randomQuestionNumber = props.state.randomQuestionNumber;
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.img__container}>
                    <img src={props.state.isGuessed
                        ? props.state.dataLanguage[level][randomQuestionNumber].flag
                        : defFlag
                    } alt="" />
                </div>
                <div className={styles.title__container}>
                    <h3 onClick={() => console.log('onPause')}>{props.state.isGuessed
                        ? props.state.dataLanguage[level][randomQuestionNumber].language
                        : 'Какой язык?'
                    }</h3>
                </div>
                <div className={styles.player__container}>
                    <ReactPlayer width='100%' height='40px' className={styles.player} controls={true} playing={!props.state.isGuessed} url={props.state.dataLanguage[level][randomQuestionNumber].audio} />
                </div>
            </div>
        </section>
    )
}