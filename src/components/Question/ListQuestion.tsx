import React from 'react';
import styles from './question.module.scss';

const ListQuestion: React.FC = () => {
    return (
        <ul>
            <li className={styles.list_active}><span></span>Китайский</li>
            <li><span></span>Русский</li>
            <li><span></span>Английский</li>
            <li><span></span>Немецкий</li>
            <li><span></span>Испанский</li>
            <li><span></span>Японский</li>
        </ul>
    )
}
export default ListQuestion; 
