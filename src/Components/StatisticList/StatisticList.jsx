import styles from './StatisticList.module.css';
import StatisticItem from '../StatisticItem/StatisticItem';
import { v4 as uuidv4 } from 'uuid';

const StatisticList = ({ options, total, positive }) => {
    const optionKeys = Object.keys(options);
    return (
        <div className={styles.statWrapper}>
            <ul className={styles.statisticList}>
                {optionKeys.map(option => (
                    <StatisticItem
                        key={uuidv4()}
                        option={option}
                        value={options[option]}
                    />
                ))}
                <li>Total: {total}</li>
                <li>Positive percentage: {positive}%</li>
            </ul>
        </div>
    );
};

export default StatisticList;
