import React from 'react';
import styles from './question.module.scss';
import imgFlagChina from '../../assets/img/China.svg';

const china = require("../../assets/saundLanguage/china.mp3");
const DescriptonQuestion: React.FC = () => {
    return (
        <>
            <div className={styles.description__img}>
                <img src={imgFlagChina} alt="" />
            </div>
            <div className={styles.description__player}>
                <h3>Китайский язык</h3>
                <p>Путунхуа (общепринятое название)</p>
                <audio controls
                    src={china}>
                </audio>
            </div>
            <p>Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).</p>
        </>
    )
}
export default DescriptonQuestion; 
