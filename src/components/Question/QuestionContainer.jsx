import React from 'react';
import styles from './question.module.scss';
import ListQuestion from './ListQuestion';
import DescriptonQuestion from './DescriptonQuestion';
import { clickNextLevelAC } from '../../redux/appReducer';

export default (props) => {
    let clickNextLevel = () => {
        props.dispatch(clickNextLevelAC())
    }
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.ul__container}>
                    <ListQuestion dispatch={props.dispatch} randomQuestionNumber={props.state.randomQuestionNumber} level={props.state.level} dataLanguage={props.state.dataLanguage}/>
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
                    ? <button className={styles.buttonNextLevel} onClick={ clickNextLevel } >Ура! Доступен следующий уровень!</button>
                    : <button>Следующий уровень не доступен</button>
                }
                    
                </div>
            </div>
        </section>
    )
}

