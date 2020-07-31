import React from 'react';
import styles from './question.module.scss';

const ListQuestion = (props) => {
    
    let dialogDataElement = props.stateTrener.map(n => <li key={n.id} className={n.isSelected ? styles.list_active : ""}><span></span>{n.language}</li>);
    return (
        <ul>
            {dialogDataElement}
        </ul>
    )
}
export default ListQuestion; 
