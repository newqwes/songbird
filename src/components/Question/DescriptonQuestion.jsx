import React from 'react';
import styles from './question.module.scss';
import { Route } from 'react-router-dom';


const DescriptonQuestion = (props) => {
    return (<> {
        props.state[props.level]
            .map(n =>
                <Route key={n.id} path={`/${n.id}`}>
                    <div className={styles.description__img}>
                        <img src={n.flag} alt="" />
                    </div>
                    <div className={styles.description__player}>
                        <h3>{n.language}</h3>
                        <p>{n.titleDesc}</p>
                        <audio controls
                            src={n.audio}>
                        </audio>
                    </div>
                    <p>{n.textDesc}</p>
                </Route>)
    } </>)
}
export default DescriptonQuestion; 
