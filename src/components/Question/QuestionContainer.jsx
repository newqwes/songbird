import React from 'react';
import styles from './question.module.scss';
import ListQuestion from './ListQuestion';
import DescriptonQuestion from './DescriptonQuestion';

const QuestionContainer = (props) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.ul__container}>
                    <ListQuestion state={props.state} clickLinkLanguage={props.clickLinkLanguage}/>
                </div>
                <div className={styles.descripton__container}>
                    <DescriptonQuestion state={props.state}/>
                </div>
                <div className={styles.button__container}>
                    {props.isGuessed 
                    ? <button className={styles.buttonNextLevel} onClick={ props.clickNextLevel } >Ура! Доступен следующий уровень!</button>
                    : <button>Следующий уровень не доступен</button>
                }
                    
                </div>
            </div>
        </section>
    )
}
export default QuestionContainer; 
