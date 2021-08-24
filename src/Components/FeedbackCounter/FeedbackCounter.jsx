import styles from './FeedbackCounter.module.css';
import { v4 as uuidv4 } from 'uuid';

const FeedbackCounter = ({ options, handlerClickOnRate }) => {
    return (
        <ul className={styles.list}>
            {options.map(option => (
                <li className={styles.item} key={uuidv4()}>
                    <button
                        name={option}
                        onClick={handlerClickOnRate}
                        type="button"
                        className={styles[option]}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackCounter;
