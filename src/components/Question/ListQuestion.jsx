import React from 'react';
import styles from './question.module.scss';
import { Link } from 'react-router-dom';

const ListQuestion = (props) => {
    let linkElements = props.state
        .map(n => n.isSelected
            ? <li key={n.id} className={styles.list_active}>
                <div className={styles.link}><span></span>{n.language}</div>
            </li>
            : <li key={n.id} className={ n.pinColorWin ? styles.list_win : '' }>
            <Link to={`/${n.id}`} onClick={() => props.clickLinkLanguage(n.id)} className={ styles.link }><span></span>{n.language}</Link>
        </li>
        );
    return (
        <ul>
            {linkElements}
        </ul>
    )
}
export default ListQuestion;