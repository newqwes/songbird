import React from 'react';
import styles from './question.module.scss';
import imgFlagChina from '../../assets/img/China.svg'

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
                    src="https://api.lingyourlanguage.com/a/43c12c6d0d859e09012004dff0f4470b06ab5b0cdb00e8af9403e65b03673c71">
                </audio>
            </div>
            <p>Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).</p>
        </>
    )
}
export default DescriptonQuestion; 
