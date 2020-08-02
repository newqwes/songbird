import React from 'react';
import styles from './question.module.scss';
import { Link } from 'react-router-dom';
import { clickLinkLanguageAC } from '../../redux/appReducer';

export default (props) => {
    let clickLink = (id) => {
        props.dispatch(clickLinkLanguageAC(id))
    }
    let linkElements = props.dataLanguage[props.level].map(n => n.isSelected
        ? <li key={n.id} className={styles.list_active}>
            <div className={styles.link}><span></span>{n.language}</div>
        </li>
        : <li key={n.id} className={n.pinColorWin ? styles.list_win : ''}>
            <Link to={`/${n.id}`} onClick={() => clickLink(n.id)} className={styles.link}><span></span>{n.language}</Link>
        </li>
    );
    return (
        <ul>
            {linkElements}
        </ul>
    )
}
