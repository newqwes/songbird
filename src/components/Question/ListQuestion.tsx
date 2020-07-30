import React from 'react';
import styles from './question.module.scss';

const ListQuestion: React.FC = () => {
    let state = {
        trening: [
            { language: 'Китайский', id: 0, isSelected: true },
            { language: 'Русский', id: 1, isSelected: false },
            { language: 'Английский', id: 2, isSelected: false },
            { language: 'Немецкий', id: 3, isSelected: false },
            { language: 'Испанский', id: 4, isSelected: false },
            { language: 'Японский', id: 5, isSelected: false }
        ]
    }
    let dialogDataElement = state.trening.map(n => <li key={n.id} className={n.isSelected ? styles.list_active : ""}><span></span>{n.language}</li>);
    return (
        <ul>
            {dialogDataElement}
        </ul>
    )
}
export default ListQuestion; 
