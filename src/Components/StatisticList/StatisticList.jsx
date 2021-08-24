import styles from './StatisticList.module.css';
import StatisticItem from '../StatisticItem/StatisticItem';
import { v4 as uuidv4 } from 'uuid';

const StatisticList = props => {
    const optionsKeys = Object.keys(props.options);
    return (
        <div className={styles.statWrapper}>
            <ul className={styles.statisticList}>
                {optionsKeys.map(option => (
                    <StatisticItem
                        key={uuidv4()}
                        option={option}
                        value={props.options[option]}
                    />
                ))}
                <li>Total: {props.total}</li>
                <li>Positive percentage: {props.positive}%</li>
            </ul>
        </div>
    );
};

export default StatisticList;
