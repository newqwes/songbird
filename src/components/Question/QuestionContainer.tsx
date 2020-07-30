import React from 'react';
import styles from './question.module.scss';
import ListQuestion from './ListQuestion';
import DescriptonQuestion from './DescriptonQuestion';

const QuestionContainer: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.ul__container}>
                    <ListQuestion />
                </div>
                <div className={styles.descripton__container}>
                    <DescriptonQuestion />
                </div>
                <div className={styles.button__container}>
                    <button>Следующий уровень</button>
                </div>
            </div>
        </section>
    )
}
export default QuestionContainer; 
