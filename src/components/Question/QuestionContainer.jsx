import React from 'react';
import styles from './question.module.scss';
import ListQuestion from './ListQuestion';
import DescriptonQuestion from './DescriptonQuestion';

const QuestionContainer = (props) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.ul__container}>
                    <ListQuestion stateTrener={props.stateTrener}/>
                </div>
                <div className={styles.descripton__container}>
                    <DescriptonQuestion stateTrener={props.stateTrener}/>
                </div>
                <div className={styles.button__container}>
                    <button>Следующий уровень</button>
                </div>
            </div>
        </section>
    )
}
export default QuestionContainer; 
