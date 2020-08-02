import React from 'react';
import styles from './question.module.scss';
import ListQuestion from './ListQuestion';
import DescriptonQuestion from './DescriptonQuestion';

const QuestionContainer = (props) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.ul__container}>
                    <ListQuestion level={props.state.level} dataLanguage={props.state.dataLanguage} clickLinkLanguage={props.clickLinkLanguage}/>
                </div>
                {props.state.cleanDescQues 
                ? <div className={styles.descripton__container}>
                <h2>Выберите один из вариантов ответа!</h2>
            </div>
                : <div className={styles.descripton__container}>
                <DescriptonQuestion level={props.state.level} dataLanguage={props.state.dataLanguage}/>
            </div>
                }
                <div className={styles.button__container}>
                    {props.state.isGuessed 
                    ? <button className={styles.buttonNextLevel} onClick={ props.clickNextLevel } >Ура! Доступен следующий уровень!</button>
                    : <button>Следующий уровень не доступен</button>
                }
                    
                </div>
            </div>
        </section>
    )
}
export default QuestionContainer; 
