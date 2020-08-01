import React from 'react';
import styles from './question.module.scss';
import { Link } from 'react-router-dom';

const ListQuestion = (props) => {
    let linkElements = props.stateTrener
        .map(n => <li key={n.id} className={n.isSelected && styles.list_active}>
            <Link to={`/${n.id}`} onClick={ () => props.clickLinkLanguage(n.id)} className={styles.link}><span></span>{n.language}</Link>
        </li>);
    return (
        <ul>
            {linkElements}
        </ul>
    )
}
export default ListQuestion;